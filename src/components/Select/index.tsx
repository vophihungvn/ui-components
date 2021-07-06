import { useRef, useState } from "react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/solid";
import useClickOutside from "../../hooks/useClickOutside";

interface ISelect<T> {
  values: T[];
  label: string;
  selected: T;
  setSelected: Function;
}

const Select = (props: ISelect<any>): JSX.Element => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const popupRef = useRef();

  useClickOutside(popupRef, () => {
    setShowPopup(false);
  });

  return (
    <div>
      <label
        id="listbox-label"
        className="block my-4 mb-2 text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div className="mt-1 relative" onClick={() => setShowPopup(!showPopup)}>
        <button
          type="button"
          className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span className="block truncate">{props?.selected}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            {/* <!-- Heroicon name: solid/selector --> */}

            <SelectorIcon className="h-5 w-5 text-gray-400" />
          </span>
        </button>
        {showPopup && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
            ref={popupRef as any}
          >
            {props.values.map((item: any) => (
              <li
                className=" cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-500 hover:bg-gray-100"
                id="listbox-option-0"
                role="option"
                aria-selected={props.selected === item}
                key={item}
                onClick={() => props.setSelected(item)}
              >
                <span className="font-normal block truncate ">{item}</span>
                {props.selected === item && (
                  <span className="text-blue-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export { Select };
