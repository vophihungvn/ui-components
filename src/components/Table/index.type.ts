import { Dispatch } from "react";

export interface TableColumn {
  title?: string;
  index: string;
  filter?: boolean;
  sort?: boolean;
  filterValue?: string[];
  filterFunc?: (filters: string[], item: any) => boolean;
  searchFunc?: (search: string) => boolean;
  filterItems?: string[];
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn[];
}

export interface ColumnConfig {
  filter: string[];
  search: string;
  sort?: "asc" | "desc" | null;
  col: TableColumn;
  filterItems?: any[];
}

export interface HeaderItemProps {
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
