import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperationButton from './components/ButtonComponents/OperationButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className = 'container'>
      <CalculatorDisplay />
      <ActionButton text = 'clear' />
      <OperationButton text = '÷' />
      <NumberButton text = '7' />
      <NumberButton text = '8' />
      <NumberButton text = '9' />
      <OperationButton text = 'X' />
      <NumberButton text = '4' />
      <NumberButton text = '5' />
      <NumberButton text = '6' />
      <OperationButton text = '-' />
      <NumberButton text = '1' />
      <NumberButton text = '2' />
      <NumberButton text = '3' />
      <OperationButton text = '+' />
      <ActionButton text = '0' />
      <OperationButton text = '=' />
    </div>
  );
};

export default App;
