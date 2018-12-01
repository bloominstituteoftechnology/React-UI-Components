import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay text="0" /> 
      <NumberButton text="clear" extraStyles="btn-styles-lg" /> 
      <ActionButton text="&divide;" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <ActionButton text="x" />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <ActionButton text="-" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <ActionButton text="+" />
      <NumberButton text="0" extraStyles="btn-styles-lg" />
      <ActionButton text="=" />
    </div>
  );
};

export default App;
