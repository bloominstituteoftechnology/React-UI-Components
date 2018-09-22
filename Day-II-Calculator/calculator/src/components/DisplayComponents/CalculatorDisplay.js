import React from "react";
import "./Display.css";

const Display = props => {
  return <button className={props.screenStyle}>{props.text}</button>;
};
const CalculatorDisplay = props => {
  return (
    <div>
      <div>
        <Display screenStyle="calculatorDisplay" text="0" />
      </div>
    </div>
  );
};
export default CalculatorDisplay;
