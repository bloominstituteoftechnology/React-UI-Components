import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <div className={`btn width-${props.width} ${props.type}`}>{props.text}</div>
  );
};

export default NumberButton;
