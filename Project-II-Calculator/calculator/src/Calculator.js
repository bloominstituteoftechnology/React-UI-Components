import React from "react";
import "./Calculator.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const Calculator = () => {
  return (
    <div className="Calculator">
      <ActionButton buttonStyle="" text="clear" />
      <NumberButton buttonStyle="" text="÷" />
      <NumberButton buttonStyle="" text="7" />
      <NumberButton buttonStyle="" text="8" />
      <NumberButton buttonStyle="" text="9" />
      <NumberButton buttonStyle="" text="X" />
      <NumberButton buttonStyle="" text="4" />
      <NumberButton buttonStyle="" text="5" />
      <NumberButton buttonStyle="" text="6" />
      <NumberButton buttonStyle="" text="-" />
      <NumberButton buttonStyle="" text="1" />
      <NumberButton buttonStyle="" text="2" />
      <NumberButton buttonStyle="" text="3" />
      <NumberButton buttonStyle="" text="+" />
      <ActionButton buttonStyle="" text="0" />
      <NumberButton buttonStyle="" text="=" />
    </div>
  );
};

export default Calculator;
