import React from 'react';
import './App.css';

import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';




const App = () => {
  return (
    <div className='app'>
      <CalculatorDisplay buttonStyle='display-button' text='0' />
      <ActionButton buttonStyle='action-button' text='clear'/>
      <NumberButton buttonStyle='number-button--operator' text='&divide;'/>
      <NumberButton buttonStyle='number-button' text='7'/>
      <NumberButton buttonStyle='number-button' text='8'/>
      <NumberButton buttonStyle='number-button' text='9'/>
      <NumberButton buttonStyle='number-button--operator' text='&times;'/>
      <NumberButton buttonStyle='number-button' text='4'/>
      <NumberButton buttonStyle='number-button' text='5'/>
      <NumberButton buttonStyle='number-button' text='6'/>
      <NumberButton buttonStyle='number-button--operator' text='&minus;'/>
      <NumberButton buttonStyle='number-button' text='1'/>
      <NumberButton buttonStyle='number-button' text='2'/>
      <NumberButton buttonStyle='number-button' text='3'/>
      <NumberButton buttonStyle='number-button--operator' text='+'/>
      <ActionButton buttonStyle='action-button' text='0'/>
      <NumberButton buttonStyle='number-button--operator' text='='/>
    </div>
  );
};

export default App;
