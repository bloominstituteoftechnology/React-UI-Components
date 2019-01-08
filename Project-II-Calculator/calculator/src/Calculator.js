import React from "react";
import "./Calculator.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

function Calculator() {
  return (
    <div className="Calculator">
      <div className="row">
        <CalculatorDisplay buttonStyle="CalculatorDisplay" text="0" />
      </div>
      <div className="row">
        <ActionButton buttonStyle="actionBtn" text="clear" />
        <NumberButton buttonStyle="operator" text="÷" />
      </div>
      <div className="row">
        <NumberButton buttonStyle="numBtnStyle" text="7" />
        <NumberButton buttonStyle="numBtnStyle" text="8" />
        <NumberButton buttonStyle="numBtnStyle" text="9" />
        <NumberButton buttonStyle="operator" text="x" />
      </div>
      <div className="row">
        <NumberButton buttonStyle="numBtnStyle" text="4" />
        <NumberButton buttonStyle="numBtnStyle" text="5" />
        <NumberButton buttonStyle="numBtnStyle" text="6" />
        <NumberButton buttonStyle="operator" text="-" />
      </div>
      <div className="row">
        <NumberButton buttonStyle="numBtnStyle" text="1" />
        <NumberButton buttonStyle="numBtnStyle" text="2" />
        <NumberButton buttonStyle="numBtnStyle" text="3" />
        <NumberButton buttonStyle="operator" text="+" />
      </div>
      <div className="row">
        <ActionButton buttonStyle="actionBtn" text="0" />
        <NumberButton buttonStyle="operator" text="=" />
      </div>
    </div>
  );
}

export default Calculator;
