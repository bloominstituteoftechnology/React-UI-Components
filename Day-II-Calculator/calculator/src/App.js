import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'; 
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';  

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay text="0" />
      <ActionButton text="Clear"/>
      <NumberButton extraClass ="signs" text="/" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <NumberButton extraClass ="signs" text="X" />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <NumberButton extraClass ="signs" text="-" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <NumberButton extraClass ="signs" text="+" />
      <ActionButton text="0" />
      <NumberButton extraClass ="signs" text="=" />
    </div>
  );
};

export default App;
