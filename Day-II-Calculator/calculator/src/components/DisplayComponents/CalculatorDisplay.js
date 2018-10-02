import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return <div className={props.buttonStyle}>{props.displayNumber}</div>;
};

export default CalculatorDisplay;
