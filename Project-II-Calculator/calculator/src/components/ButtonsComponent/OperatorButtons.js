import React from "react";
import "./Button.css";

const OperatorButton = props => {
  return (
    <button
      name={props.operator}
      className={props.className}
      onClick={props.clicked}
    >
      {props.operator}
    </button>
  );
};

export default OperatorButton;
