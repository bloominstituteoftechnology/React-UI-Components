import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay.js";
import ActionButton from "./components/ButtonComponents/ActionButton.js";
import NumberButton from "./components/ButtonComponents/NumberButton.js";

const App = () => {
  return (
    <div className="container">
      <div className="calculator">
        <div className="display-screen">
          <CalculatorDisplay text="0" buttonStyle="screen" />
        </div>

        <div className="row">
          <ActionButton text="CLEAR" buttonStyle="clear" />
          <ActionButton text="/" buttonStyle="divide" />
        </div>

        <div className="row">
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <ActionButton text="X" buttonStyle="multiply" />
        </div>

        <div className="row">
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <ActionButton text="-" buttonStyle="subtract" />
        </div>

        <div className="row">
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <ActionButton text="+" buttonStyle="add" />
        </div>

        <div className="row">
          <NumberButton text="0" buttonStyle="zero" />
          <ActionButton text="=" buttonStyle="equals" />
        </div>
      </div>
    </div>
  );
};

export default App;
