import React from "react";
import "./Display.css";


// trying to incorporate calculator

// start MVP assignment
const CalculatorDisplay = props => {
  return (
    <div className="total-div">
      <p>{props.total}</p>
    </div>
  );
};

export default CalculatorDisplay;
