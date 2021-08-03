import { Dispatch } from "react";

export interface TableColumn<T> {
  title?: string;
  index: string;
  filter?: boolean;
  sort?: boolean;
  filterValue?: string[];
  filterFunc?: (filters: string[], item: any) => boolean;
  searchFunc?: (search: string) => boolean;
  filterItems?: string[];
  render?: (value: any, index: number, record: T) => JSX.Element | string;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}

export interface ColumnConfig<T> {
  filter: string[];
  search: string;
  sort?: "asc" | "desc" | null;
  col: TableColumn<T>;
  filterItems?: any[];
}

export interface HeaderItemProps<T> {
  col: TableColumn<T>;
  idx: number;
  isLast: boolean;
  data: any[];
  config: ColumnConfig<T>;
  onChangeColunmConfig: Dispatch<{
    type: string;
    config: {
      column: string;
      value: any;
    };
  }>;
}
