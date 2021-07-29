import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useMemo, useState } from "react";
import "./style.scss";
import { useReducer } from "react";
import cloneDeep from "lodash.clonedeep";
import { TableColumn, TableProps, ColumnConfig } from "./index.type";
import { HeaderItem, SORT_VALUES } from "./HeaderItem";

const generateRowItem = (col: TableColumn, record: any, idx: number) => {
  return <td key={idx}>{record[col.index]}</td>;
};

const Table = <T extends unknown>(props: TableProps<T>): JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const initialColumnConfig = useMemo(() => {
    return props.columns.reduce(
      (obj: { [key: string]: ColumnConfig }, item) => {
        const filterItems =
          item?.filterItems ??
          Array.from(new Set(props.data.map((dt: any) => dt[item.index])));

        obj[item.index] = {
          filter: filterItems,
          search: "",
          sort: null,
          col: item,
          filterItems,
        };
        return obj;
      },
      {}
    );
  }, [props.columns, props.data]);

  const [columnConfig, reducerDispatch] = useReducer(
    (
      state: { [key: string]: ColumnConfig },
      action: { type: string; config: { column: string; value: any } }
    ) => {
      switch (action.type) {
        case "sort":
          state[action.config.column].sort = action.config.value;
          break;
        case "filter":
          setPage(0); // reset page filter
          state[action.config.column].filter = action.config.value;
          break;
        case "search":
          setPage(0); // reset page when search
          state[action.config.column].search = action.config.value;
          break;
      }
      return cloneDeep(state);
    },
    initialColumnConfig
  );

  const filteredItem = useMemo(() => {
    console.log({ columnConfig });
    let filterdData = cloneDeep(props.data ?? []);
    const colums = Object.keys(columnConfig);
    colums.forEach((columnName) => {
      const { filter, search, col, sort } = columnConfig[columnName];
      if (filter.length > 0) {
        if (col?.filterFunc) {
          filterdData = filterdData.filter((item) =>
            col?.filterFunc?.(filter, item)
          );
        } else {
          filterdData = filterdData.filter((item: any) =>
            filter.includes(item[col.index])
          );
        }
      }

      if (sort && sort !== SORT_VALUES.NONE) {
        filterdData = filterdData.sort((a: any, b: any): number => {
          if (sort === SORT_VALUES.ASC) {
            return a[col.index] > b[col.index] ? 1 : -1;
          }

          return a[col.index] < b[col.index] ? 1 : -1;
        });
      }
    });

    return filterdData;
  }, [columnConfig, props.data]);

  const showItem = useMemo(() => {
    return (filteredItem ?? []).slice(page * 10, page * 10 + 10);
  }, [filteredItem, page]);

  console.log({ page });

  return (
    <div className="w-full predict-table">
      <div>
        <table className="w-full text-sm border-collapse rounded-md">
          <thead>
            <tr>
              {props.columns.map((column, idx: number) => (
                <HeaderItem
                  col={column}
                  idx={idx}
                  isLast={idx === props.columns.length - 1}
                  data={props.data}
                  config={columnConfig[column.index]}
                  onChangeColunmConfig={reducerDispatch}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {showItem.map((item, idx) => (
              <tr>
                {props.columns.map((col, idx) =>
                  generateRowItem(col, item, idx)
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          pageCount={Math.ceil(filteredItem.length / 10)}
          forcePage={page}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          previousLabel={<ChevronLeftIcon className="w-5 h-5" />}
          nextLabel={<ChevronRightIcon className="w-5 h-5" />}
          containerClassName="flex flex-row mt-3 justify-end"
          pageClassName="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium outline-none"
          pageLinkClassName="outline-none"
          activeClassName="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium outline-none"
          previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 outline-none"
          previousLinkClassName="outline-none"
          nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 outline-none"
          nextLinkClassName="outline-none"
          breakClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 outline-none"
          onPageChange={({ selected }) => {
            setPage(selected);
          }}
        />
      </div>
    </div>
  );
};

export { Table };
