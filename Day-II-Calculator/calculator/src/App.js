import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return <div className="container">
      <CalculatorDisplay />

      <ActionButton text="clear" buttonStyle="large white" />
      <NumberButton text="%" buttonStyle="small red" />

      <NumberButton text="7" buttonStyle="small white" />
      <NumberButton text="8" buttonStyle="small white" />
      <NumberButton text="9" buttonStyle="small white" />
      <NumberButton text="X" buttonStyle="small red" />

      <NumberButton text="4" buttonStyle="small white" />
      <NumberButton text="5" buttonStyle="small white" />
      <NumberButton text="6" buttonStyle="small white" />
      <NumberButton text="-" buttonStyle="small red" />

      <NumberButton text="1" buttonStyle="small white" />
      <NumberButton text="2" buttonStyle="small white" />
      <NumberButton text="3" buttonStyle="small white" />
      <NumberButton text="+" buttonStyle="small red" />

      <ActionButton text="0" buttonStyle="large white" />
      <NumberButton text="=" buttonStyle="small red" />
    </div>;
};

export default App;
