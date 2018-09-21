import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="container-wrapper">
      <CalculatorDisplay />
      <div className="button-container">
        <ActionButton />
        <NumberButton />
      </div>
      <div className="button-container">
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
      </div>
      <div className="button-container">
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
      </div>
      <div className="button-container">
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
      </div>
      <div className="button-container">
        <ActionButton />
        <NumberButton />
      </div>
    </div>
  );
};

export default App;
