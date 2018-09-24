import React from 'react';
import './App.css';
import CalulatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='app-container'>
      <CalulatorDisplay />

      <div className='button-container'>
        <ActionButton style='clear-zero-button' text='clear' />
        <ActionButton style='symbol' text='÷' />
      </div>

      <div className='button-container'>
        <NumberButton style='number' text='7' />
        <NumberButton style='number' text='8' />
        <NumberButton style='number' text='9' />
        <ActionButton style='symbol' text='x' />
      </div>

      <div className='button-container'>
        <NumberButton style='number' text='4' />
        <NumberButton style='number' text='5' />
        <NumberButton style='number' text='6' />
        <ActionButton style='symbol' text='-' />
      </div>

      <div className='button-container'>
        <NumberButton style='number' text='1' />
        <NumberButton style='number' text='2' />
        <NumberButton style='number' text='3' />
        <ActionButton style='symbol' text='+' />
      </div>

       <div className='button-container'>
        <ActionButton style='clear-zero-button' text='0' />
        <ActionButton style='symbol' text='=' />
      </div>

  </div>
  );
};


export default App;