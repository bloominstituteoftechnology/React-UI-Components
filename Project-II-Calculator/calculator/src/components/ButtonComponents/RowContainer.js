import React from "react";
import "./Button.css";

const RowContainer = props => {
  return (
    <div className={`row-container ${props.className}`}>{props.children}</div>
  );
};

export default RowContainer;
