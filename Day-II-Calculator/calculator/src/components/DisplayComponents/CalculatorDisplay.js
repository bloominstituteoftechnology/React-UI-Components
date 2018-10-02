import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return (
    <div className="calcDisplay">
      <p>{props.displayText}</p>
    </div>
  );
};

export default CalculatorDisplay;
