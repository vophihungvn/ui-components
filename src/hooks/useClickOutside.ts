import { useEffect } from "react";

const useClickOutside = (ref: any, callback: Function) => {
  const handleClick = (event: any) => {
    const target = event.target;

    if (
      ref.current &&
      !ref.current.contains(target) &&
      !document.querySelector(".ant-picker-dropdown")?.contains(target)
    ) {
      callback(event);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  });
};

export default useClickOutside;
