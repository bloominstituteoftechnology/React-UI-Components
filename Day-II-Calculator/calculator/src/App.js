import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <ActionButton customStyleProp="clear-button" text="clear"/>
      <ActionButton text="÷"/>
      <NumberButton text="7"/>
      <NumberButton text="8"/>
      <NumberButton text="9"/>
      <ActionButton text="×"/>
      <NumberButton text="4"/>
      <NumberButton text="5"/>
      <NumberButton text="6"/>
      <ActionButton text="−"/>
      <NumberButton text="1"/>
      <NumberButton text="2"/>
      <NumberButton text="3"/>
      <ActionButton text="+"/>
      <NumberButton customStyleProp="zero-button" text="0"/>
      <ActionButton text="="/>
    </div>
  );
};

export default App;
