import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { Checkbox } from "../../../Checkbox";

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
                  ml-2 h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
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

export { FilterPopup };
