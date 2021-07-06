import classnames from "classnames";
import "./style.css";

interface SpinnerProps {
  classNames?: string;
  size?: "small" | "medium" | "large";
}

const Spinner = ({ classNames, size = "medium" }: SpinnerProps) => {
  return (
    <svg
      className={classnames(
        "circle-spinner fill-current stroke-current",
        classNames,
        {
          "text-blue-900": !classNames?.includes("text-"),
          "w-6 h-6": size === "small",
          "w-10 h-10": size === "medium" || !size,
          "w-16 h-16": size === "large",
        }
      )}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="" cx="50" cy="50" r="45" />
    </svg>
  );
};

const LogoSpinner = ({ classNames, size = "medium" }: SpinnerProps) => {
  return (
    <svg
      className={classnames(
        "logo-spinner logo-spinning fill-current",
        classNames ?? "",
        {
          "text-blue-900": !classNames?.includes("text-"),
          "w-6 h-6": size === "small",
          "w-10 h-10": size === "medium" || !size,
          "w-16 h-16": size === "large",
        }
      )}
      viewBox="0 0 116.83 124.49"
      fill="none"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            // className="cls-1"
            d="M98.31,124.49h18.52L67.14,0H49.69L0,124.49H18.7l7.07-18.09h0l10.38-28H36L58.41,20.13,75.09,63.39q1,2.69,2.06,5.37h0q1.84,4.8,3.7,9.6h-.19L90,103.91h0Z"
          />
        </g>
      </g>
    </svg>
  );
};

export { Spinner, LogoSpinner };
