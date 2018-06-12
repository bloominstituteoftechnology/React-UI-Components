import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='container'>
      <Display />
      <div className='buttons-container'>
      <div className='number-buttons'>
      <NumberButton name='0' customStyleProp='long-button' />
      <NumberButton name='1' />
      <NumberButton name='2' />
      <NumberButton name='3' />
      <NumberButton name='4' />
      <NumberButton name='5' />
      <NumberButton name='6' />
      <NumberButton name='7' />
      <NumberButton name='8' />
      <NumberButton name='9' />
      <NumberButton name='clear' customStyleProp='long-button'  />
      </div>
      <div className='action-buttons'>
        <ActionButton name='÷' />
        <ActionButton name='x' />
        <ActionButton name='-' />
        <ActionButton name='+' />
        <ActionButton name='=' />
      </div>
      </div>
    </div>
  );
};

export default App;
