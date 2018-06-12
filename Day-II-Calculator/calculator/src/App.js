import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calc-body">
      <CalculatorDisplay value="0" />
      <ActionButton name="clear" />
      <ActionButton name="0" />
      <div className="operations">
        <NumberButton kind="operations" item="÷" />
        <NumberButton kind="operations" item="×" />
        <NumberButton kind="operations" item="−" />
        <NumberButton kind="operations" item="+" />
        <NumberButton kind="operations" item="=" />
      </div>
      <div className="grid">
        <NumberButton kind="number" item="7" />
        <NumberButton kind="number" item="8" />
        <NumberButton kind="number" item="9" />
        <NumberButton kind="number" item="4" />
        <NumberButton kind="number" item="5" />
        <NumberButton kind="number" item="6" />
        <NumberButton kind="number" item="1" />
        <NumberButton kind="number" item="2" />
        <NumberButton kind="number" item="3" />
      </div>
    </div>
  );
};

export default App;
