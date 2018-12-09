import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import OperatorButton from './components/ButtonComponents/OperatorButtons';

const App = () => {
  return (
    <div className='calculator-wrapper'>
      <CalculatorDisplay text='0' />
      <div className='button-container'>
        <ActionButton text='clear' />
        <OperatorButton text='&divide;' />
        <NumberButton text='7' />
        <NumberButton text='8' />
        <NumberButton text='9' />
        <OperatorButton text='*' />
        <NumberButton text='4' />
        <NumberButton text='5' />
        <NumberButton text='6' />
        <OperatorButton text='-' />
        <NumberButton text='1' />
        <NumberButton text='2' />
        <NumberButton text='3' />
        <OperatorButton text='+' />
        <ActionButton text='0' />
        <OperatorButton text='=' />
      </div>
    </div>
  );
};

export default App;
