import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return (
    <div className="display">
      <h1 className="result">
        {props.state.content.length === 0
          ? props.state.result
          : props.state.content.join("")}
        {props.state.result === 0 ? "" : ` = ${props.state.result}`}
      </h1>
    </div>
  );
};

export default CalculatorDisplay;
