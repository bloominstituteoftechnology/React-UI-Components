import React from 'react';
import './App.css';
import CalcDisplay from'./components/DisplayComponents/CalculatorDisplay';
import ActionBtn from './components/ButtonComponents/ActionButton';
import NumberBtn from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='calc-container'>
      <div className='calc-container'>
        <CalcDisplay sum='55378008' />
      </div>
      <div className='button-container'>
        <ActionBtn actionClass='clear button' text='clear' />
        <ActionBtn actionClass='math-function button' text='÷' />
      </div>
      <div className='button-container'>
        <NumberBtn class='button number-btn' text='1'  />
        <NumberBtn class='button number-btn' text='2'  />
        <NumberBtn class='button number-btn' text='3'  />
        <ActionBtn actionClass='math-function button' text='×'  />
      </div>
      <div className='button-container'>
        <NumberBtn class='button number-btn' text='4' />
        <NumberBtn class='button number-btn' text='5' />
        <NumberBtn class='button number-btn' text='6' />
        <ActionBtn actionClass='math-function button' text='−' />
      </div>
      <div className='button-container'>
        <NumberBtn class='button number-btn' text='7' />
        <NumberBtn class='button number-btn' text='8' />
        <NumberBtn class='button number-btn' text='9' />
        <ActionBtn actionClass='math-function button' text='+' />
      </div>
      <div className='button-container'>
        <ActionBtn actionClass='zero button' text='0' />
        <ActionBtn actionClass='math-function button' text='=' />
      </div>
    </div>
  );
};

export default App;
