import "./style.css";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "classnames";
import { ChevronDownIcon } from "@heroicons/react/solid";

type DropDownItem = string | JSX.Element;

interface DropdownProps {
  button: string | JSX.Element | string[] | JSX.Element[];
  items: DropDownItem[];
  buttonClassname?: string;
  itemClassname?: string;
  itemActiveClassname?: string;
}

const Dropdown = ({
  button,
  items,
  buttonClassname,
  itemClassname,
  itemActiveClassname,
}: DropdownProps): JSX.Element => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={classNames(
              "flex flex-row items-center outline-none focus:outline-none",
              buttonClassname ?? ""
            )}
          >
            {button}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {items.map((item: DropDownItem, idx: number) => {
              if (Array.isArray(item)) {
                return (
                  <div className="px-1 py-1" key={`dropdown-item-` + idx}>
                    {item.map(
                      (childItem: string | JSX.Element, childIndex: number) => (
                        <Menu.Item key={"dropdown-item-child -" + childIndex}>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? itemActiveClassname ?? ""
                                  : itemClassname ?? ""
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              {childItem}
                            </button>
                          )}
                        </Menu.Item>
                      )
                    )}
                  </div>
                );
              }

              return (
                <div className="px-1 py-1 " key={`dropdown-item-` + idx}>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? itemActiveClassname ?? ""
                            : itemClassname ?? ""
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {item}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export { Dropdown };
