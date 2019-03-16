import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div className='calc-wrapper'>

      <div className='zero-display'>
        <CalculatorDisplay text='0' />
      </div>

      <div className='row'>
        <ActionButton buttonStyle='clear' text='clear' />
        <ActionButton buttonStyle='action' text='÷' />
      </div>
      <div className='row'>
        <NumberButton buttonStyle='number' text='7' />
        <NumberButton buttonStyle='number' text='8' />
        <NumberButton buttonStyle='number' text='9' />
        <ActionButton buttonStyle='action' text='×' />
      </div>
      <div className='row'>
        <NumberButton buttonStyle='number' text='4' />
        <NumberButton buttonStyle='number' text='5' />
        <NumberButton buttonStyle='number' text='6' />
        <ActionButton buttonStyle='action' text='－' />
      </div>
      <div className='row'>
        <NumberButton buttonStyle='number' text='1' />
        <NumberButton buttonStyle='number' text='2' />
        <NumberButton buttonStyle='number' text='3' />
        <ActionButton buttonStyle='action' text='﹢' />
      </div>
      <div className='row'>
        <NumberButton buttonStyle='zero' text='0' />
        <ActionButton buttonStyle='action' text='﹦' />
      </div>
    </div>
  );
};

export default App;
