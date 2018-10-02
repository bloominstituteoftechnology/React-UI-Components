import React from "react";
import "./Display.css";
// import NumberButton from "../ButtonComponents/NumberButton";
// import ActionButton from "../ButtonComponents/ActionButton";

// const values = ['/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', '=']
const CalculatorDisplay = props => {
  return (
    <div className="calcDisplay">
      <p>{props.displayText}</p>
    </div>
  );
};

export default CalculatorDisplay;
