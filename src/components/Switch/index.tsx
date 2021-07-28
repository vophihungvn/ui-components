import classNames from "classnames";
import { useState } from "react";
import { Switch as HeadlessSwitch } from "@headlessui/react";
import { useEffect } from "react";

interface SwitchProps {
  enabled?: boolean;
  onChange?: (enable: boolean) => void;
  classname?: any[];
  activeColor?: string;
  ringColor?: string;
}

const Switch = (props: SwitchProps): JSX.Element => {
  const [enabled, setEnabled] = useState(false);
  console.log({
    props,
  });

  useEffect(() => {
    console.log("change props");
    setEnabled(props?.enabled ?? enabled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.enabled]);

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={(val) => {
        setEnabled(val);
        props?.onChange?.(val);
      }}
      className={classNames(
        enabled ? props.activeColor ?? "bg-blue-900" : "bg-gray-200",
        `relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:${
          props.ringColor ?? "ring-blue-800"
        }`,
        props.classname
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
        )}
      />
    </HeadlessSwitch>
  );
};

export { Switch };
