import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <div className="row">
        <ActionButton text="clear" />
        <NumberButton text="÷" style="sign" />
      </div>
      <div className="row">
        <NumberButton text="7" style="num" />
        <NumberButton text="8" style="num" />
        <NumberButton text="9" style="num" />
        <NumberButton text="×" style="sign" />
      </div>
      <div className="row">
        <NumberButton text="4" style="num" />
        <NumberButton text="5" style="num" />
        <NumberButton text="6" style="num" />
        <NumberButton text="-" style="sign" />
      </div>
      <div className="row">
        <NumberButton text="3" style="num" />
        <NumberButton text="2" style="num" />
        <NumberButton text="1" style="num" />
        <NumberButton text="+" style="sign" />
      </div>
      <div className="row">
        <ActionButton text="0" />
        <NumberButton text="=" style="sign" />
      </div>
    </div>
  );
};

export default App;
