import React from "react";
import "./Display.css";

function CalculatorDisplay(props) {
  return (
    <div className="CalculatorDisplay">
      <button className={props.buttonStyle}>{props.text}</button>
    </div>
  );
}

export default CalculatorDisplay;
