import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import './components/ButtonComponents/Button.css';
import './components/DisplayComponents/Display.css';

const App = () => {
  return (
    <div className='calculator'>
      <CalculatorDisplay />
      <ActionButton text='clear' buttonStyle='actionbutton' />
      <NumberButton text='+' buttonStyle='operatorbutton' />
      <NumberButton text='7' buttonStyle='numberbutton' />
      <NumberButton text='8' buttonStyle='numberbutton' />
      <NumberButton text='9' buttonStyle='numberbutton' />
      <NumberButton text='×' buttonStyle='operatorbutton' />
      <NumberButton text='4' buttonStyle='numberbutton' />
      <NumberButton text='5' buttonStyle='numberbutton' />
      <NumberButton text='6' buttonStyle='numberbutton' />
      <NumberButton text='-' buttonStyle='operatorbutton' />
      <NumberButton text='1' buttonStyle='numberbutton' />
      <NumberButton text='2' buttonStyle='numberbutton' />
      <NumberButton text='3' buttonStyle='numberbutton' />
      <NumberButton text='+' buttonStyle='operatorbutton' />
      <ActionButton text='0' buttonStyle='actionbutton' />
      <NumberButton text='=' buttonStyle='operatorbutton' />
   </div>
  );
};

export default App;
