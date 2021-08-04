import classNames from "classnames";
import { FilterPopup } from "./FilterPopup";
import "../style.scss";
import { HeaderItemProps } from "../index.type";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";

export const SORT_VALUES = {
  ASC: "asc",
  DESC: "desc",
  NONE: "none",
};

const NEXT_SORT_VALUE = {
  [SORT_VALUES.NONE]: SORT_VALUES.ASC,
  [SORT_VALUES.ASC]: SORT_VALUES.DESC,
  [SORT_VALUES.DESC]: SORT_VALUES.NONE,
};

const HeaderItem = <T extends any>({
  col,
  idx,
  isLast = false,
  data,
  config,
  onChangeColunmConfig,
}: HeaderItemProps<T>): JSX.Element => {
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

  const renderSort = () => {
    if (col.sort) {
      return (
        <div
          className="flex flex-col ml-auto cursor-pointer"
          onClick={() => {
            onChangeColunmConfig({
              type: "sort",
              config: {
                column: col.index,
                value: NEXT_SORT_VALUE[config.sort ?? SORT_VALUES.NONE],
              },
            });
          }}
        >
          <ChevronUpIcon
            className={classNames("w-4 h-4 text-gray-500", {
              "text-gray-800 font-semibold": config.sort === SORT_VALUES.ASC,
            })}
          />
          <ChevronDownIcon
            className={classNames("w-4 h-4 text-gray-500", {
              "text-gray-800": config.sort === SORT_VALUES.DESC,
            })}
          />
        </div>
      );
    }
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
        {renderSort()}
      </div>
    </th>
  );
};
export { HeaderItem };
