import React from 'react';
import './css/index.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';

const App = () => {
  return (
      <div className="appContainer">
      <CalculatorDisplay text="0" />
      <ActionButton text="clear" style="symbolStyle" />
      <NumberButton text="÷" style="symbolStyle" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <NumberButton text="x" style="symbolStyle" />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <NumberButton text="-" style="symbolStyle" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <NumberButton text="+" style="symbolStyle" />
      <ActionButton text="0" style="symbolStyle" />
      <NumberButton text="=" style="symbolStyle" />
      </div>
  );
};

export default App;
