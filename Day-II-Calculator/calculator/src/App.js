import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className = "calc-wrapper">
      <CalculatorDisplay />
      <div className = "btn-wrapper">
        <ActionButton />
        <NumberButton />
      </div>
      <div className = "btn-wrapper">
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
      </div>
      <div className = "btn-wrapper">
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
      </div>
      <div className = "btn-wrapper">
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
      </div>
      <div className = "btn-wrapper">
        <ActionButton />
        <NumberButton />
      </div>
    </div>
  );
};

export default App;
