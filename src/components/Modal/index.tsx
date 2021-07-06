import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classnames from "classnames";

interface ModelProps {
  onOk?: Function;
  onClose?: Function;
  isOpen: boolean;
  closeText?: string;
  okText?: string;
  title?: string;
  children?: JSX.Element;
  danger?: boolean;
}

const Model = (props: ModelProps) => {
  const handleOk = async () => {
    props?.onOk?.();
  };
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        open={props.isOpen}
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => props?.onClose?.()}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            // enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            // leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0  opacity-30 bg-black" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {props?.title}
              </Dialog.Title>
              {props?.children}

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                  onClick={() => props?.onClose?.()}
                >
                  {props.closeText ?? "Close"}
                </button>
                <button
                  type="button"
                  className={classnames(
                    "inline-flex justify-center px-4 py-2 text-sm font-medium   border border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ",
                    {
                      "text-blue-900 bg-blue-100 hover:bg-blue-200 focus-visible:ring-blue-500":
                        !props?.danger,
                      "text-red-900 bg-red-100 hover:bg-red-200 focus-visible:ring-red-500":
                        props?.danger,
                    }
                  )}
                  onClick={() => handleOk()}
                >
                  {props?.okText ?? "Ok"}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export { Model };
