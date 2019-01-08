import React from "react";
import "./Button.css";

const OperatorButton = props => {
  return (
    <button name={props.operator} className="operator__button">
      {props.operator}
    </button>
  );
};

export default OperatorButton;
