import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='app'>
      <CalculatorDisplay />
      <ActionButton className='white-btn action-btn' value='clear'/>
      <NumberButton className='red-btn operator-btn' value='&divide;'/>
      <NumberButton className='white-btn digit-btn' value='7'/>
      <NumberButton className='white-btn digit-btn' value='8'/>
      <NumberButton className='white-btn digit-btn' value='9'/>
      <NumberButton className='red-btn operator-btn' value='&times;'/>
      <NumberButton className='white-btn digit-btn' value='4'/>
      <NumberButton className='white-btn digit-btn' value='5'/>
      <NumberButton className='white-btn digit-btn' value='6'/>
      <NumberButton className='red-btn operator-btn' value='-'/>
      <NumberButton className='white-btn digit-btn' value='1'/>
      <NumberButton className='white-btn digit-btn' value='2'/>
      <NumberButton className='white-btn digit-btn' value='3'/>
      <NumberButton className='red-btn operator-btn' value='+'/>
      <ActionButton className='white-btn action-btn' value='0'/>
      <NumberButton className='red-btn operator-btn' value='='/>
    </div>
  );
};

export default App;
