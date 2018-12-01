import React from 'react';
import './App.css';
import  CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator-container" >
      <CalculatorDisplay />
      <ActionButton text="clear" buttonStyle="btn-action"/>
      <NumberButton text="&divide;" buttonStyle="btn-operation"/>
      <NumberButton text="7" buttonStyle="btn-number"/>
      <NumberButton text="8" buttonStyle="btn-number"/>
      <NumberButton text="9" buttonStyle="btn-number"/>
      <NumberButton text="&times;" buttonStyle="btn-operation"/>
      <NumberButton text="4" buttonStyle="btn-number"/>
      <NumberButton text="5" buttonStyle="btn-number"/>
      <NumberButton text="6" buttonStyle="btn-number"/>
      <NumberButton text="-" buttonStyle="btn-operation"/>
      <NumberButton text="1" buttonStyle="btn-number"/>
      <NumberButton text="2" buttonStyle="btn-number"/>
      <NumberButton text="3" buttonStyle="btn-number"/>
      <NumberButton text="+" buttonStyle="btn-operation"/>
      <ActionButton text="0" buttonStyle="btn-action-number"/>
      <NumberButton text="=" buttonStyle="btn-operation"/>
    </div>
  );
};

export default App;
