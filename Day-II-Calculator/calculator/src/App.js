import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="wrap">
    <CalculatorDisplay />
      <div>
      <ActionButton text="clear" buttonStyle="actionButton" />
      <NumberButton text="&#247;" buttonStyle="numberButtonRed" />
      </div>
      <div> 
      <NumberButton text="7" buttonStyle="numberButton" />
      <NumberButton text="8" buttonStyle="numberButton" />
      <NumberButton text="9" buttonStyle="numberButton" />
      <NumberButton text="&#215;" buttonStyle="numberButtonRed" />
      </div>
      <div>
      <NumberButton text="4" buttonStyle="numberButton" />
      <NumberButton text="5" buttonStyle="numberButton" />
      <NumberButton text="6" buttonStyle="numberButton" />
      <NumberButton text="&#8722;" buttonStyle="numberButtonRed" />
      </div>
      <div>
      <NumberButton text="1" buttonStyle="numberButton" />
      <NumberButton text="2" buttonStyle="numberButton" />
      <NumberButton text="3" buttonStyle="numberButton" />
      <NumberButton text="&#43;" buttonStyle="numberButtonRed" />
      </div>
      <div>
      <ActionButton text="0" buttonStyle="actionButton" />
      <NumberButton text="=" buttonStyle="numberButtonRed" />
      </div>
     
      
    </div>
  );
};

export default App;
