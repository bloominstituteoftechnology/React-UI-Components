import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <div className="display-container">
        <CalculatorDisplay text="0"></CalculatorDisplay>
      </div>
      <div className="white-buttons-container">
        <ActionButton text="Clear"></ActionButton>
        <NumberButton text="9" className="number-button"></NumberButton>
        <NumberButton text="8" className="number-button"></NumberButton>
        <NumberButton text="7" className="number-button"></NumberButton>
        <NumberButton text="6" className="number-button"></NumberButton>
        <NumberButton text="5" className="number-button"></NumberButton>
        <NumberButton text="4" className="number-button"></NumberButton>
        <NumberButton text="3" className="number-button"></NumberButton>
        <NumberButton text="2" className="number-button"></NumberButton>
        <NumberButton text="1" className="number-button"></NumberButton>
        <ActionButton text="0"></ActionButton>
      </div>
      <div className="red-buttons-container">
        <NumberButton text="%" className="operation-button"></NumberButton>
        <NumberButton text="X" className="operation-button"></NumberButton>
        <NumberButton text="-" className="operation-button"></NumberButton>
        <NumberButton text="+" className="operation-button"></NumberButton>
        <NumberButton text="=" className="operation-button"></NumberButton>
      </div>
    </div>
  );
};

export default App;
