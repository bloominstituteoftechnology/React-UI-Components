import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js'

const App = () => {
  return (
    <div class = 'container'>
    <div class = 'calculator'>
    <div class = 'screen'>
    <CalculatorDisplay text = '0' type = 'screen'/>
    </div>
    <div class = 'row'>
    <ActionButton text = 'CLEAR' type = 'clear'/>
    <ActionButton text = '/' type = 'divide'/>
    </div>
    <div class = 'row'>
    <NumberButton text = '7'/>
    <NumberButton text = '8'/>
    <NumberButton text = '9'/>
    <ActionButton text = 'X' type = 'multiply'/>
    </div>
    <div class = 'row'>
    <NumberButton text = '4'/>
    <NumberButton text = '5'/>
    <NumberButton text = '6'/>
    <ActionButton text = '-' type = 'subtract'/>
    </div>
    <div class = 'row'>
    <NumberButton text = '1'/>
    <NumberButton text = '2'/>
    <NumberButton text = '3'/>
    <ActionButton text = '+' type = 'add'/>
    </div>
    <div class = 'row'>
    <NumberButton text = '0' type = 'zero'/>
    <ActionButton text = '=' type = 'equals'/>
    </div>    
    </div>
    </div>
  );
};

export default App;
