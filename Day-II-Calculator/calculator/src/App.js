import React from 'react';
import './App.css';

import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='app-container'>
      <div>
        <CalculatorDisplay total='0' />
      </div>
      <div>
        <ActionButton text='clear' />
        <NumberButton text='/' buttonStyle='red' />
      </div>
      <div>
        <NumberButton text='7' />
        <NumberButton text='8' />
        <NumberButton text='9' />
        <NumberButton text='x' buttonStyle='red' />
      </div>
      <div>
        <NumberButton text='4' />
        <NumberButton text='5' />
        <NumberButton text='6' />
        <NumberButton text='-' buttonStyle='red' />
      </div>
      <div>
        <NumberButton text='1' />
        <NumberButton text='2' />
        <NumberButton text='3' />
        <NumberButton text='+' buttonStyle='red' />
      </div>
      <div>
        <ActionButton text='0' buttonStyle='width3' />
        <NumberButton text='=' buttonStyle='red' />
      </div>
    </div>
  );
};

export default App;
