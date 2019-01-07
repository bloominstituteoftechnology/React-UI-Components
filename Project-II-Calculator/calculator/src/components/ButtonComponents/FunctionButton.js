import React from "react";
import "./Button.css";

const FunctionButton = props => {
  return (
    <button className={props.buttonStyle}>{props.text}</button>
  );
};

export default FunctionButton;