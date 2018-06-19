import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className = "container">
      <CalculatorDisplay text="0"/>
      <ActionButton text="clear"/>
      <NumberButton text="&divide;"/>
      <NumberButton text="7"/>
      <NumberButton text="8"/>
      <NumberButton text="9"/>
      <NumberButton text="&multiply;"/>
      <NumberButton text="4"/>
      <NumberButton text="5"/>
      <NumberButton text="6"/>
      <NumberButton text="-"/>
      <NumberButton text="1"/>
      <NumberButton text="2"/>
      <NumberButton text="3"/>
      <NumberButton text="+"/>
      <ActionButton text="0"/>
    </div>
  );
};

export default App;
