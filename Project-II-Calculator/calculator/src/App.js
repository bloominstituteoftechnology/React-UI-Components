import React from "react";
import "./App.css";
import "./components/DisplayComponents/CalculatorDisplay";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay />

      <div className="calculator">
        <div className="numbers">
          <ActionButton
            container="action-button"
            text="clear"
            buttonStyle="action"
          />
          <NumberButton name="1" buttonStyle="number" />
          <NumberButton name="2" buttonStyle="number" />
          <NumberButton name="3" buttonStyle="number" />
          <NumberButton name="4" buttonStyle="number" />
          <NumberButton name="5" buttonStyle="number" />
          <NumberButton name="6" buttonStyle="number" />
          <NumberButton name="7" buttonStyle="number" />
          <NumberButton name="8" buttonStyle="number" />
          <NumberButton name="9" buttonStyle="number" />
          <ActionButton
            container="action-button"
            text="0"
            buttonStyle="action"
          />
        </div>

        <div className="symbols">
          <NumberButton name="÷" buttonStyle="symbol" />
          <NumberButton name="x" buttonStyle="symbol" />
          <NumberButton name="-" buttonStyle="symbol" />
          <NumberButton name="+" buttonStyle="symbol" />
          <NumberButton name="=" buttonStyle="symbol" />
        </div>
      </div>
    </div>
  );
};

export default App;
