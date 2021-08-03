import { SearchCircleIcon, SearchIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { useState } from "react";
import { ChangeEventHandler } from "react";
import "./style.css";

interface InputProps {
  onChange?: ChangeEventHandler;
  id?: string;
  name?: string;
  type?: string;
  classname?: string;
}

const Input = (props: InputProps): JSX.Element => {
  return (
    <div className="relative flex items-center mt-1">
      <input
        type={props.type ?? "text"}
        name={props.name ?? ""}
        id={props.id ?? ""}
        className={classNames(
          "block w-full pr-12 border-gray-300 rounded-md shadow-sm sm:text-sm",
          props.classname
        )}
        onChange={(e) => props?.onChange?.(e)}
      />
      {/* <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd className="inline-flex items-center px-2 font-sans text-sm font-medium text-gray-400 border border-gray-200 rounded">
          ⌘K
        </kbd>
      </div> */}
    </div>
  );
};

interface SearchProps extends InputProps {
  onSearch?: (val: string) => void;
}

const Search = (props: SearchProps): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const handleOnKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      props?.onSearch?.(value);
    }
  };
  return (
    <div className="relative flex items-center mt-1">
      <input
        type={props.type ?? "text"}
        name={props.name ?? ""}
        id={props.id ?? ""}
        className={classNames(
          "block w-full pr-12 border-gray-300 rounded-md shadow-sm sm:text-sm",
          props.classname
        )}
        onChange={(e) => {
          props?.onChange?.(e);
          setValue(e.target.value);
        }}
        onKeyUp={handleOnKeyUp}
      />
      <div className="absolute inset-y-0 right-0 flex py-2 pr-4">
        <SearchIcon className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
};

export { Input, Search };
