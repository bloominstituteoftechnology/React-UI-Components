import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';

const App = () => {
  return (
    <div className='container'>
      <div><CalculatorDisplay /></div>
      <div>
        <ActionButton text='Clear' buttonStyle='threeQtr' />
        <NumberButton text='/' buttonStyle='symbol'/>
      </div>
      <div>
        <NumberButton text='7' />
        <NumberButton text='8' />
        <NumberButton text='9' />
        <NumberButton text='X' buttonStyle='symbol'/>
      </div>
      <div>
        <NumberButton text='4' />
        <NumberButton text='5' />
        <NumberButton text='6' />
        <NumberButton text='-' buttonStyle='symbol'/>
      </div>
      <div>
        <NumberButton text='1' />
        <NumberButton text='2' />
        <NumberButton text='3' />
        <NumberButton text='+' buttonStyle='symbol'/>
      </div>
      <div>
        <ActionButton text='0' buttonStyle='threeQtr' />
        <NumberButton text='=' buttonStyle='symbol'/>
      </div>
    </div>
  );
};

export default App;
