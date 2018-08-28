import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
// import CalculatorContainer from './components/CalculatorContainer/CalculatorContainer.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div className='calc-container'>
      <CalculatorDisplay />

      <div className='num-buttons-container'>
        <NumberButton text='7' />
        <NumberButton text='8' />
        <NumberButton text='9' />
        <NumberButton text='4' />
        <NumberButton text='5' />
        <NumberButton text='6' />
        <NumberButton text='1' />
        <NumberButton text='2' />
        <NumberButton text='3' />
      </div>
    </div>
    
  );
};

export default App;
