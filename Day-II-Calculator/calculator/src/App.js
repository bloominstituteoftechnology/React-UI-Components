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
        <NumberButton text='7' buttonStyle='bold' />
        <NumberButton text='8' buttonStyle='bold' />
        <NumberButton text='9' buttonStyle='bold' />
        <NumberButton text='x' buttonStyle='red' />
      </div>
      <div>
        <NumberButton text='4' buttonStyle='bold' />
        <NumberButton text='5' buttonStyle='bold' />
        <NumberButton text='6' buttonStyle='bold' />
        <NumberButton text='-' buttonStyle='red' />
      </div>
      <div>
        <NumberButton text='1' buttonStyle='bold' />
        <NumberButton text='2' buttonStyle='bold' />
        <NumberButton text='3' buttonStyle='bold' />
        <NumberButton text='+' buttonStyle='red' />
      </div>
      <div>
        <ActionButton text='0' buttonStyle='bold' />
        <NumberButton text='=' buttonStyle='red' />
      </div>
    </div>
  );
};

export default App;
