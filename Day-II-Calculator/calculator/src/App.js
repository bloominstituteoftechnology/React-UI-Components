import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

ActionButton.defaultProps = { width: "1", type: "" };
NumberButton.defaultProps = { width: "1" };

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <ActionButton buttonStyling="btn" width="3" text="clear" action="clear" />
      <ActionButton buttonStyling="btn" type="func" action="divide" />
      <NumberButton buttonStyling="btn" text="7" />
      <NumberButton buttonStyling="btn" text="8" />
      <NumberButton buttonStyling="btn" text="9" />
      <ActionButton buttonStyling="btn" type="func" action="times" />
      <NumberButton buttonStyling="btn" text="4" />
      <NumberButton buttonStyling="btn" text="5" />
      <NumberButton buttonStyling="btn" text="6" />
      <ActionButton buttonStyling="btn" type="func" action="minus" />
      <NumberButton buttonStyling="btn" text="1" />
      <NumberButton buttonStyling="btn" text="2" />
      <NumberButton buttonStyling="btn" text="3" />
      <ActionButton buttonStyling="btn" type="func" action="plus" />
      <NumberButton buttonStyling="btn" width="3" text="0" />
      <ActionButton buttonStyling="btn" type="func" action="equals" />
    </div>
  );
};

export default App;
