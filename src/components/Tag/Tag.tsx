import classnames from "classnames";

import "./Tag.css";

interface TagProps {
  className?: string;
  title?: string;
}

const Tag = (props: TagProps) => {
  return (
    <span
      className={classnames(
        "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium",
        props?.className ?? ""
      )}
    >
      {props.title ?? ""}
    </span>
  );
};

export { Tag };
