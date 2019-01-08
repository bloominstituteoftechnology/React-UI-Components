import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["÷", "×", "-", "+", "="];

const App = () => {
  return (
    <div className='calculator-container'>
      <CalculatorDisplay result='0' />
      <div className='buttons-container'>
        <div className='numbers-container'>
          <ActionButton text='clear' />
          {numbers.map(number => { return <NumberButton 
            text={number} 
            className='btn btn-number'
            key={number} /> })}
          <ActionButton text='0' />
        </div>
        <div className='symbols-container'>
          {operators.map(operator => { return <NumberButton 
            text={operator} 
            className='btn btn-operator'
            key={operator} /> })}
        </div>
      </div>

    </div>
  );
};

export default App;
