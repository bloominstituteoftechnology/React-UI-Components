import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return (
    <div className="total-div">
      <p>{props.total}</p>
    </div>
  );
};

export default CalculatorDisplay;
