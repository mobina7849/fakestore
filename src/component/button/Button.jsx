import React from "react";
import "./button.style.scss";
import clsx from "clsx";
const Button = ({ children, primary = false, className = "", ...rest }) => {
  return (
    <button
      className={clsx("Button", primary && "primary", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
