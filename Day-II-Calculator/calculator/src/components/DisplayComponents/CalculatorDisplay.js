import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return <div className={props.btnClass}>{props.num}</div>;
};

export default CalculatorDisplay;
