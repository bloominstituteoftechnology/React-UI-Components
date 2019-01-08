import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return (
    <div className="calculator__display">
      <p className="display__text">{props.total}</p>
    </div>
  );
};

export default CalculatorDisplay;
