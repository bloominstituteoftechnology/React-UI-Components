import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      
      <div className="row">
        <ActionButton text="clear" buttonStyle="buttonStyle largeButton clearButton" />
        <ActionButton text="÷" buttonStyle="buttonStyle actionButton" />
      </div>
      <div className="row">
        <NumberButton text="7" buttonStyle="buttonStyle numberButton" />
        <NumberButton text="8" buttonStyle="buttonStyle numberButton" />
        <NumberButton text="9" buttonStyle="buttonStyle numberButton" />
        <ActionButton text="×" buttonStyle="buttonStyle actionButton" />
      </div>
      <div className="row">
        <NumberButton text="4" buttonStyle="buttonStyle numberButton" />
        <NumberButton text="5" buttonStyle="buttonStyle numberButton" />
        <NumberButton text="6" buttonStyle="buttonStyle numberButton" />
        <ActionButton text="-" buttonStyle="buttonStyle actionButton" />
      </div>
      <div className="row">
        <NumberButton text="1" buttonStyle="buttonStyle numberButton" />
        <NumberButton text="2" buttonStyle="buttonStyle numberButton" />
        <NumberButton text="3" buttonStyle="buttonStyle numberButton" />
        <ActionButton text="+" buttonStyle="buttonStyle actionButton" />
      </div>
      <div className="row">
        <NumberButton text="0" buttonStyle="buttonStyle largeButton zeroButton" />
        <ActionButton text="=" buttonStyle="buttonStyle actionButton" />
      </div>
    </div>
  );
};

export default App;
