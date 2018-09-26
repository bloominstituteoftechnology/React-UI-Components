import React from "react";
import "./App.css";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="main-container">
      <CalculatorDisplay />

      <div className="button-row">
        <ActionButton style="wide-button" text="clear" />
        <ActionButton style="operator" text="÷" />
      </div>

      <div className="button-row">
        <NumberButton style="number" text="7" />
        <NumberButton style="number" text="8" />
        <NumberButton style="number" text="9" />
        <ActionButton style="operator" text="x" />
      </div>

      <div className="button-row">
        <NumberButton style="number" text="4" />
        <NumberButton style="number" text="5" />
        <NumberButton style="number" text="6" />
        <ActionButton style="operator" text="-" />
      </div>

      <div className="button-row">
        <NumberButton style="number" text="1" />
        <NumberButton style="number" text="2" />
        <NumberButton style="number" text="3" />
        <ActionButton style="operator" text="+" />
      </div>

      <div className="button-row">
        <ActionButton style="wide-button" text="0" />
        <ActionButton style="operator" text="=" />
      </div>
    </div>
  );
};

export default App;
