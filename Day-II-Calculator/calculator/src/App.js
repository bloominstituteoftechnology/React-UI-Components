import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay />
      <div className="all-btn">
        <div className="btn-wrapper">
          <ActionButton text="clear" buttonStyle="wide-button" />
          <ActionButton text="÷" buttonStyle="action-button" />
        </div>
        <div className="btn-wrapper">
          <NumberButton text="7" buttonStyle="number-button" />
          <NumberButton text="8" buttonStyle="number-button" />
          <NumberButton text="9" buttonStyle="number-button" />
          <ActionButton text="X" buttonStyle="action-button" />
        </div>
        <div className="btn-wrapper">
          <NumberButton text="4" buttonStyle="number-button" />
          <NumberButton text="5" buttonStyle="number-button" />
          <NumberButton text="6" buttonStyle="number-button" />
          <ActionButton text="-" buttonStyle="action-button" />
        </div>
        <div className="btn-wrapper">
          <NumberButton text="1" buttonStyle="number-button" />
          <NumberButton text="2" buttonStyle="number-button" />
          <NumberButton text="3" buttonStyle="number-button" />
          <ActionButton text="+" buttonStyle="action-button" />
        </div>
        <div className="btn-wrapper">
          <ActionButton text="0" buttonStyle="wide-button" />
          <ActionButton text="=" buttonStyle="action-button" />
        </div>
      </div>
    </div>
  );
};

export default App;
