import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="calc-wrapper">
      <div className="display-wrapper">
        <CalculatorDisplay />
      </div>
      <div className="btn-wrapper">
        <ActionButton btnStyle="action-btn" text="clear" />
        <NumberButton btnStyle="red-btn" text="÷" />
      </div>
      <div className="btn-wrapper">
        <NumberButton btnStyle="num-btn" text="7" />
        <NumberButton btnStyle="num-btn" text="8" />
        <NumberButton btnStyle="num-btn" text="9" />
        <NumberButton btnStyle="red-btn" text="X" />
      </div>
      <div className="btn-wrapper">
        <NumberButton btnStyle="num-btn" text="4" />
        <NumberButton btnStyle="num-btn" text="5" />
        <NumberButton btnStyle="num-btn" text="6" />
        <NumberButton btnStyle="num-btn" btnStyle="red-btn" text="-" />
      </div>
      <div className="btn-wrapper">
        <NumberButton btnStyle="num-btn" text="1" />
        <NumberButton btnStyle="num-btn" text="2" />
        <NumberButton btnStyle="num-btn" text="3" />
        <NumberButton btnStyle="red-btn" text="+" />
      </div>
      <div className="btn-wrapper">
        <ActionButton btnStyle="action-btn" text="0" />
        <NumberButton btnStyle="red-btn" text="=" />
      </div>
    </div>
  );
};

export default App;
