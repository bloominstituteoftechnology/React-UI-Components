import React from "react";
import "./Button.css";

const NumberButton = props => {
  return <div className={`btn num width-${props.width}`}>{props.text}</div>;
};

export default NumberButton;
