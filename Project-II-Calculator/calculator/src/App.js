import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div>
      <CalculatorDisplay text = '0' />
      <ActionButton text = 'clear'/>
      <NumberButton text = '/' style = 'btn-text' />
      <NumberButton text = '7' style = 'btn-text' />
      <NumberButton text = '8' style = 'btn-text' />
      <NumberButton text = '9' style = 'btn-text' />
      <NumberButton text = 'X' style = 'btn-text' />
      <NumberButton text = '4' style = 'btn-text' />
      <NumberButton text = '5' style = 'btn-text' />
      <NumberButton text = '6' style = 'btn-text' />
      <NumberButton text = '-' style = 'btn-text' />
      <NumberButton text = '1' style = 'btn-text' />
      <NumberButton text = '2' style = 'btn-text' />
      <NumberButton text = '3' style = 'btn-text' />
      <NumberButton text = '+' style = 'btn-text' />
      <ActionButton text = '0'/>
      <NumberButton text = '=' style = 'btn-text' />


      



    </div>
  );
};

export default App;
