import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className = "calculator">
      <CalculatorDisplay />
      <ActionButton buttonStyle="long-button" text="clear" />
      <NumberButton buttonStyle="symbol-button" text="&divide;" />
      <NumberButton buttonStyle="number-button" text="7" />
      <NumberButton buttonStyle="number-button" text="8" />
      <NumberButton buttonStyle="number-button" text="9" />
      <NumberButton buttonStyle="symbol-button" text="x" />
      <NumberButton buttonStyle="number-button" text="4" />
      <NumberButton buttonStyle="number-button" text="5" />
      <NumberButton buttonStyle="number-button" text="6" />
      <NumberButton buttonStyle="symbol-button" text="-" />
      <NumberButton buttonStyle="number-button" text="1" />
      <NumberButton buttonStyle="number-button" text="2" />
      <NumberButton buttonStyle="number-button" text="3" />
      <NumberButton buttonStyle="symbol-button" text="+" />
      <ActionButton buttonStyle="long-button" text="0" />
      <NumberButton buttonStyle="symbol-button" text="=" />
    </div>
  );
};

export default App;
