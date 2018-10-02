import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return <div className="display">{props.number}</div>;
};

export default CalculatorDisplay;
