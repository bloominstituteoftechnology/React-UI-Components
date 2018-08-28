import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';

const App = () => {
  return (
    <div className='calculator-container'>
      <CalculatorDisplay />
      <NumberButton buttonText='7' />
      <NumberButton buttonText='8' />
      <NumberButton buttonStyle='fat' buttonText='0' />
    </div>
  );
};

export default App;
