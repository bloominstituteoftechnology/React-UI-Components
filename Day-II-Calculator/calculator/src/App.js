import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='app'>
      <CalculatorDisplay/>
      <ActionButton buttonStyle='white-btn action-btn' value='clear'/>
      <NumberButton buttonStyle='red-btn operator-btn' value='&divide;'/>
      <NumberButton buttonStyle='white-btn digit-btn' value='7'/>
      <NumberButton buttonStyle='white-btn digit-btn' value='8'/>
      <NumberButton buttonStyle='white-btn digit-btn' value='9'/>
      <NumberButton buttonStyle='red-btn operator-btn' value='&times;'/>
      <NumberButton buttonStyle='white-btn digit-btn' value='4'/>
      <NumberButton buttonStyle='white-btn digit-btn' value='5'/>
      <NumberButton buttonStyle='white-btn digit-btn' value='6'/>
      <NumberButton buttonStyle='red-btn operator-btn' value='-'/>
      <NumberButton buttonStyle='white-btn digit-btn' value='1'/>
      <NumberButton buttonStyle='white-btn digit-btn' value='2'/>
      <NumberButton buttonStyle='white-btn digit-btn' value='3'/>
      <NumberButton buttonStyle='red-btn operator-btn' value='+'/>
      <ActionButton buttonStyle='white-btn action-btn' value='0'/>
      <NumberButton buttonStyle='red-btn operator-btn' value='='/>
    </div>
  );
};

export default App;
