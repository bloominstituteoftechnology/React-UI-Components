import React from "react";
import "./Button.css";

const NumberButton = props => {
  return <div className="number-button">{props.buttonStyle}</div>;
};

export default NumberButton;
