import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js'

const App = () => {
  return (
    <div>
      <div class = 'container'>
      <h3>Welcome to React Calculator</h3>	    <div class = 'calculator'>
      <p>	    <div class = 'screen'>
        We have given you a starter project. You'll want to build out your	    <CalculatorDisplay text = '0' type = 'screen'/>
        components in their respective files, remove this code and replace it	    </div>
        with the proper components.	    <div class = 'row'>
      </p>	    <ActionButton text = 'CLEAR' type = 'clear'/>
      <p>	    <ActionButton text = '/' type = 'divide'/>
        <strong>	    </div>
          Don't forget to `default export` your components and import them here	    <div class = 'row'>
          inside of this file in order to make them work.	    <NumberButton text = '7'/>
        </strong>	    <NumberButton text = '8'/>
      </p>	    <NumberButton text = '9'/>
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
