import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import './App.css';

const App = () => {
  return (
    <div className='calculator'>
      <CalculatorDisplay />
      <ActionButton type='clear' />
      <ActionButton type='divide' />
      <NumberButton num='7' />
      <NumberButton num='8' />
      <NumberButton num='9' />
      <ActionButton type='multiply' />
      <NumberButton num='4' />
      <NumberButton num='5' />
      <NumberButton num='6' />
      <ActionButton type='subtract' />
      <NumberButton num='1' />
      <NumberButton num='2' />
      <NumberButton num='3' />
      <ActionButton type='add' />
      <NumberButton num='0' />
      <ActionButton type='equal' />

    </div>
  );
};

export default App;
