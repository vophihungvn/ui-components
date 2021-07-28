import ReactPaginate from "react-paginate";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { Dispatch, Fragment, useMemo, useState } from "react";
import "./style.scss";
import classNames from "classnames";
import { useReducer } from "react";
import cloneDeep from "lodash.clonedeep";
import { Popover, Transition } from "@headlessui/react";
import { Checkbox } from "../Checkbox";

interface TableColumn {
  title?: string;
  index: string;
  filter?: boolean;
  filterValue?: string[];
  filterFunc?: (filters: string[], item: any) => boolean;
  searchFunc?: (search: string) => boolean;
  filterItems?: string[];
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn[];
}

interface ColumnConfig {
  filter: string[];
  search: string;
  sort?: "asc" | "desc" | null;
  col: TableColumn;
  filterItems?: any[];
}

interface HeaderItemProps {
  col: TableColumn;
  idx: number;
  isLast: boolean;
  data: any[];
  config: ColumnConfig;
  onChangeColunmConfig: Dispatch<{
    type: string;
    config: {
      column: string;
      value: any;
    };
  }>;
}

const FilterPopup = ({
  title,
  items,
  onChange,
  activeItems,
}: {
  title: string;
  items: string[];
  onChange: (enable: boolean, item: string) => void;
  activeItems: string[];
}) => {
  return (
    <div className="w-full max-w-sm px-4 ">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                 group bg-orange-700 px-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>{title}</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-4 w-4 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                <div className="py-2 overflow-y-scroll rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 max-h-56">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2 ">
                    {items.map((item) => (
                      <Checkbox
                        title={item}
                        key={item}
                        onChange={(enable) => onChange(enable, item)}
                        checked={activeItems.includes(item)}
                      />
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

const HeaderItem = ({
  col,
  idx,
  isLast = false,
  data,
  config,
  onChangeColunmConfig,
}: HeaderItemProps): JSX.Element => {
  const { filter, search, sort, filterItems = [] } = config;

  const handleFilterChange = (isEnable: boolean, item: string) => {
    let filterItems = [...filter];
    if (!filter.includes(item) && isEnable) {
      filterItems.push(item);
    }

    if (!isEnable) {
      filterItems = filterItems.filter((ft) => ft !== item);
    }

    onChangeColunmConfig({
      type: "filter",
      config: { column: col.index, value: filterItems },
    });
  };

  const renderHeader = () => {
    if (col.filter) {
      return (
        <FilterPopup
          title={col.title ?? ""}
          items={filterItems}
          onChange={handleFilterChange}
          activeItems={filter}
        />
      );
    }

    return <span>{col.title}</span>;
  };

  return (
    <th
      className={classNames("font-medium text-left ", {
        "rounded-tl-md": idx === 0,
        "rounded-tr-md": isLast,
      })}
    >
      <div
        className={classNames("flex flex-row items-center", {
          "cursor-pointer": col.filter,
        })}
      >
        {renderHeader()}
      </div>
    </th>
  );
};

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
    let filterdData = cloneDeep(props.data ?? []);
    const colums = Object.keys(columnConfig);
    colums.forEach((columnName) => {
      const { filter, search, col } = columnConfig[columnName];
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
