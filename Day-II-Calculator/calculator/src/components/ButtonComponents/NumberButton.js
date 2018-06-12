import React from "react";
import "./Button.css";

const NumberButton = props => {
  return <div className={props.btnClass}>{props.num}</div>;
};

export default NumberButton;
