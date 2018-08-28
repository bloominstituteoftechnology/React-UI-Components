import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay />
      <div className='enable-flex'>
        <ActionButton content='clear' />
        <NumberButton buttonStyle='operator' symbol='÷' />
      </div>
      <div className='enable-flex'>
        <NumberButton buttonStyle='digit' symbol='7' />
        <NumberButton buttonStyle='digit' symbol='8' />
        <NumberButton buttonStyle='digit' symbol='9' />
        <NumberButton buttonStyle='operator' symbol='x' />
      </div>
      <div className='enable-flex'>
        <NumberButton buttonStyle='digit' symbol='4' />
        <NumberButton buttonStyle='digit' symbol='5' />
        <NumberButton buttonStyle='digit' symbol='6' />
        <NumberButton buttonStyle='operator' symbol='–' />
      </div>
      <div className='enable-flex'>
        <NumberButton buttonStyle='digit' symbol='1' />
        <NumberButton buttonStyle='digit' symbol='2' />
        <NumberButton buttonStyle='digit' symbol='3' />
        <NumberButton buttonStyle='operator' symbol='+' />
      </div>
      <div className='enable-flex'>
        <ActionButton content='0' />
        <NumberButton buttonStyle='operator' symbol='=' />
      </div>
    </div>
  );
};

export default App;
