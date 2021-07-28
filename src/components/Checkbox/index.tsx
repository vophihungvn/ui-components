import { useEffect, useState } from "react";
import "./style.css";

interface CheckboxProps {
  title: string;
  description?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = ({
  title,
  description,
  checked,
  onChange,
}: CheckboxProps): JSX.Element => {
  const [check, setCheck] = useState<boolean>(!!checked);

  useEffect(() => {
    setCheck(!!checked);
  }, [checked]);

  return (
    <div className="flex items-start ">
      <div className="flex items-center h-5">
        <input
          id={title}
          aria-describedby="checkbox-description"
          name="checkbox"
          type="checkbox"
          className="w-4 h-4 border-gray-300 rounded text-primary-blue focus:ring-indigo-500"
          checked={check}
          onChange={(e: any) => {
            onChange?.(e?.target?.checked);
            setCheck(e?.target?.checked);
          }}
        />
      </div>
      <div className="flex flex-col ml-3 text-sm">
        <label
          htmlFor={title}
          className="font-medium text-gray-700 cursor-pointer"
        >
          {title}
        </label>
        {description && (
          <div id="comments-description" className="text-gray-500">
            <span className="">{description} </span>
          </div>
        )}
      </div>
    </div>
  );
};

export { Checkbox };
