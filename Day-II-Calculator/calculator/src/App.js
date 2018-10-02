import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='calculator-container'>
      <CalculatorDisplay />
      <div className='calc-row'>
        <NumberButton />
        <ActionButton />
      </div>
      <div className='calc-row'>
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <ActionButton />
      </div>
      <div className='calc-row'>
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <ActionButton />
      </div>
      <div className='calc-row'>
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <ActionButton />
      </div>
      <div className='calc-row'>
        <NumberButton />
        <ActionButton />
      </div>

    </div>
  );
};

export default App;
