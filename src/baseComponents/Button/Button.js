import { memo } from "react";
import cx from "classnames";
import Div from "@/baseComponents/Div";

const Button = ({ btnType = 1, className, children, ...props }) => {
  return (
    <>
      <button
        className={cx(
          "p-y-8 p-x-16 br-rad-px-20 br-all-solid-2 mouse-hand",
          btnType === 1
            ? "bg-theme-two bg-theme-three-on-hover text-white"
            : "",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default memo(Button);
