import classNames from "classnames";
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

export { Input };
