import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

ActionButton.defaultProps = { width: "1" };
NumberButton.defaultProps = { width: "1" };

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <ActionButton width="3" text="clear" />
      <ActionButton type="func" action="divide" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <ActionButton type="func" action="times" />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <ActionButton type="func" action="minus" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <ActionButton type="func" action="plus" />
      <ActionButton width="3" text="0" />
      <ActionButton type="func" action="equals" />
    </div>
  );
};

export default App;
