import React from "react";
import "./Button.css";

const NumberButton = props => {
  return <p className={props.buttonStyle}>{props.name}</p>;
};

export default NumberButton;
