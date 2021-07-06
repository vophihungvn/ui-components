import { Spinner } from "../Spinner";
import classnames from "classnames";

interface LoadingContainerProps {
  spinning: boolean;
  full?: boolean;
  children: JSX.Element;
}
const LoadingContainer = (props: LoadingContainerProps) => {
  return (
    <div className="relative" style={{ width: "100%", height: "100%" }}>
      {props?.spinning && (
        <div
          className={classnames({
            "absolute z-50 overflow-hidden opacity-75 flex flex-col items-center justify-center bg-opacity-10 bg-black":
              props?.spinning,
            "w-full h-full": props?.full,
          })}
        >
          <Spinner />
        </div>
      )}

      {props.children}
      {/* {!props.spinning && props.children} */}
    </div>
  );
};

export { LoadingContainer };
