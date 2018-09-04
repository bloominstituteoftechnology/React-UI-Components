import React from "react";
import "./Display.css";

function CalculatorDisplay(props) {
  return <div className="display-total">{props.num}</div>;
}

export default CalculatorDisplay;
