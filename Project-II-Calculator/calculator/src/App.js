import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

function App() {
  return (
    <div className="main-container">
      <CalculatorDisplay displayStyle="display" text="0" />
      <ActionButton actionStyle="large-button" text="clear" />
      <NumberButton buttonStyle="operator" text="÷" />
      <NumberButton buttonStyle="number" text="7" />
      <NumberButton buttonStyle="number" text="8" />
      <NumberButton buttonStyle="number" text="9" />
      <NumberButton buttonStyle="operator" text="X" />
      <NumberButton buttonStyle="number" text="4" />
      <NumberButton buttonStyle="number" text="5" />
      <NumberButton buttonStyle="number" text="6" />
      <NumberButton buttonStyle="operator" text="-" />
      <NumberButton buttonStyle="number" text="1" />
      <NumberButton buttonStyle="number" text="2" />
      <NumberButton buttonStyle="number" text="3" />
      <NumberButton buttonStyle="operator" text="+" />
      <ActionButton actionStyle="large-button" text="0" />
      <NumberButton buttonStyle="operator" text="=" />
    </div>
  );
}

export default App;
