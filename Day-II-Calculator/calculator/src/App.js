import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay text="0" />
      <ActionButton buttonStyle="wide" text="clear" />
      <NumberButton buttonStyle="red" text="&#247;" />
      <NumberButton buttonStyle="white" text="7" />
      <NumberButton buttonStyle="white" text="8" />
      <NumberButton buttonStyle="white" text="9" />
      <NumberButton buttonStyle="red" text="&#215;" />
      <NumberButton buttonStyle="white" text="4" />
      <NumberButton buttonStyle="white" text="5" />
      <NumberButton buttonStyle="white" text="6" />
      <NumberButton buttonStyle="red" text="&#8722;" />
      <NumberButton buttonStyle="white" text="1" />
      <NumberButton buttonStyle="white" text="2" />
      <NumberButton buttonStyle="white" text="3" />
      <NumberButton buttonStyle="red" text="+" />
      <ActionButton buttonStyle="wide bold" text="0" />
      <NumberButton buttonStyle="red" text="=" />
    </div>
  );
};

export default App;
