import React from "react";
import "./Input.css";

const Input = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
export default Input;
