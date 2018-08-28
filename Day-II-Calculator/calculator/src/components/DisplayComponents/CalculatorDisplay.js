import React from "react";
import "./Display.css";

const CalculatorDisplay = props => (
  <div>
    <h1 className={props.displayStyle}>{props.text}</h1>
  </div>
);

export default CalculatorDisplay;
