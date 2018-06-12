import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay text="0" />

      <ActionButton text="clear" customStyle="white-button" />
      <NumberButton text="&divide;" customStyle="red-button" />

      <NumberButton text="7" customStyle="white-button" />
      <NumberButton text="8" customStyle="white-button" />
      <NumberButton text="9" customStyle="white-button" />
      <NumberButton text="&times;" customStyle="red-button" />

      <NumberButton text="4" customStyle="white-button" />
      <NumberButton text="5" customStyle="white-button" />
      <NumberButton text="6" customStyle="white-button" />
      <NumberButton text="&minus;" customStyle="red-button" />

      <NumberButton text="1" customStyle="white-button" />
      <NumberButton text="2" customStyle="white-button" />
      <NumberButton text="3" customStyle="white-button" />
      <NumberButton text="&#43;" customStyle="red-button" />

      <ActionButton text="0" customStyle="white-button" />
      <NumberButton text="&#61;" customStyle="red-button" />
    </div>
  );
};

export default App;
