import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay name="0" />
      <ActionButton name="clear" />
      <NumberButton name="&divide;" numberStyle="function-button" />
      <NumberButton name="7" />
      <NumberButton name="8" />
      <NumberButton name="9" />
      <NumberButton name="x" numberStyle="function-button" />
      <NumberButton name="4" />
      <NumberButton name="5" />
      <NumberButton name="6" />
      <NumberButton name="-" numberStyle="function-button" />
      <NumberButton name="1" />
      <NumberButton name="2" />
      <NumberButton name="3" />
      <NumberButton name="+" numberStyle="function-button" />
      <ActionButton name="0" />
      <NumberButton name="=" numberStyle="function-button" />
    </div>
  );
};

export default App;
