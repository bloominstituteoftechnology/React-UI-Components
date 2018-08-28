import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div class='app-container'>
      <CalculatorDisplay />
      <div className='num-container'>
        <ActionButton type='wide-action' text='Clear' />
        <ActionButton type='operator' text='÷' />
      </div>

      <div className='num-container'>
        <NumberButton type='number' text='7' />
        <NumberButton type='number' text='8' />
        <NumberButton type='number' text='9' />
        <ActionButton type='operator' text='x' />
      </div>

      <div className='num-container'>
        <NumberButton type='number' text='4' />
        <NumberButton type='number' text='5' />
        <NumberButton type='number' text='6' />
        <ActionButton type='operator' text='-' />
      </div>

      <div class='num-container'>
        <NumberButton type='number' text='1' />
        <NumberButton type='number' text='2' />
        <NumberButton type='number' text='3' />
        <ActionButton type='operator' text='+' />
      </div>

      <div className='num-container'>
        <NumberButton type='wide-number' text='0' />
        <ActionButton type='operator' text='=' />
      </div>
    </div>
  );
};

export default App;
