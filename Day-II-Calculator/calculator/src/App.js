import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CaculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="app">

      <div className="display">
      <CalculatorDisplay />
      </div>

      <div className="row">
      <ActionButton />
      <ActionButton />
      </div>

    <div className="row">
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <ActionButton />
    </div>

    <div className="row">
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <ActionButton />
    </div>

    <div className="row">
    <NumberButton />
    <NumberButton />
    <NumberButton />
    <ActionButton />
    </div>

    <div className="row">
    <NumberButton />
    <ActionButton />
    </div>

    <div>
    </div>

    </div>
  );
};

export default App;
