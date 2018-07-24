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
        <ActionButton text='clear' buttonStyle='threeQtr' />
        <NumberButton buttonStyle="fas fa-divide" />
      </div>
      <div>
        <NumberButton text='7' />
        <NumberButton text='8' />
        <NumberButton text='9' />
        <button className="fas fa-times"></button>
      </div>
      <div>
        <NumberButton text='4' />
        <NumberButton text='5' />
        <NumberButton text='6' />
        <button className="fas fa-minus"></button>
      </div>
      <div>
        <NumberButton text='1' />
        <NumberButton text='2' />
        <NumberButton text='3' />
        <button className="fas fa-plus"></button>
      </div>
      <div>
        <ActionButton text='0' buttonStyle='threeQtr' />
        <button className="fas fa-equals"></button>
      </div>
    </div>
  );
};

export default App;
