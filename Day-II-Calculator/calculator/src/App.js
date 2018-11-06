import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='calculator'>
      <CalculatorDisplay text='0' />
      <div className="calculator-functions">
        <div className="numbers">
          <ActionButton text='clear' />
          <NumberButton buttonStyle='number' text='1' />
          <NumberButton buttonStyle='number' text='2' />
          <NumberButton buttonStyle='number' text='3' />
          <NumberButton buttonStyle='number' text='4' />
          <NumberButton buttonStyle='number' text='5' />
          <NumberButton buttonStyle='number' text='6' />
          <NumberButton buttonStyle='number' text='7' />
          <NumberButton buttonStyle='number' text='8' />
          <NumberButton buttonStyle='number' text='9' />
          <ActionButton text='0' />
        </div>

        <div className='operators'>
        <NumberButton buttonStyle='arithmetic' text='&divide;' />
        <NumberButton buttonStyle='arithmetic' text='&times;' />
        <NumberButton buttonStyle='arithmetic' text='&minus;' />
        <NumberButton buttonStyle='arithmetic' text='&#x2b;' />
        <NumberButton buttonStyle='arithmetic' text='&#x3d;' />
        </div>
      </div> 
    </div>
  );
};

export default App;
