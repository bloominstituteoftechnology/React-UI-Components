import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className= 'calculator-container'>

      <CalculatorDisplay />

      <div className= 'button-container'>
        <ActionButton type='clear' text='clear' />
        <ActionButton type='function' text='÷' />
      </div>

      <div className='button-container'>
        <NumberButton type='number' text='7' />
        <NumberButton type='number' text='8' />
        <NumberButton type='number' text='9' />
        <NumberButton type='function' text='x' />
      </div>

      <div className='button-container'>
        <NumberButton type='number' text='4' />
        <NumberButton type='number' text='5' />
        <NumberButton type='number' text='6' />
        <NumberButton type='function' text='-' />
      </div>

      <div className='button-container'>
        <NumberButton type='number' text='1' />
        <NumberButton type='number' text='2' />
        <NumberButton type='number' text='3' />
        <NumberButton type='function' text='+' />
      </div>

      <div className='button-container'>
        <NumberButton type='zero' text='0' />
        <NumberButton type='function' text='=' />
      </div>
    </div>
  );
};

export default App;
