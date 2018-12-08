import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => (
  <div class="calculator">
    <div class="display">
      <CalculatorDisplay text="0" displayStyle="style" />
    </div>
    <div class="board">
      <div class="numbers">
        <ActionButton text="clear" buttonStyle="long" />
        <NumberButton text="9" buttonStyle="num" />
        <NumberButton text="8" buttonStyle="num" />
        <NumberButton text="7" buttonStyle="num" />
        <NumberButton text="6" buttonStyle="num" />
        <NumberButton text="5" buttonStyle="num" />
        <NumberButton text="4" buttonStyle="num" />
        <NumberButton text="3" buttonStyle="num" />
        <NumberButton text="2" buttonStyle="num" />
        <NumberButton text="1" buttonStyle="num" />
        <ActionButton text="0" buttonStyle="long" />
      </div>
      <div class="operators">
        <NumberButton text="+" buttonStyle="operator" />
        <NumberButton text="-" buttonStyle="operator" />
        <NumberButton text="×" buttonStyle="operator" />
        <NumberButton text="÷" buttonStyle="operator" />
        <NumberButton text="=" buttonStyle="operator" />
      </div>
    </div>
  </div>
);

export default App;