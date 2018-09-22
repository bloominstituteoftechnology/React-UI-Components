import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';


const App = () => {
  return (
    <div class ='container'>
    <div class = "calculator">

    <div class ='display-screen'>
    <CalculatorDisplay text = '100' type = 'screen'/>
    </div>

    <div class = 'row'>
    <ActionButton text = 'ClEAR' type = 'clear'/>
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
    <NumberButton text = '0'/>
    <ActionButton text = '=' type = 'equals'/>
    </div>
    </div>
    </div>


  );
};

export default App;
