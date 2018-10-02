import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='wrapper'>
      <CalculatorDisplay />

      <div className="container">
        <ActionButton customButton="wide-button" text="clear" />
        <ActionButton customButton="op-button" text="&#247;" />
      </div>

      <div className="container">
        <NumberButton text="7"/>
        <NumberButton text="8"/>
        <NumberButton text="9"/>
        <ActionButton customButton="op-button" text="&#215;" />
      </div>

      <div className="container">
        <NumberButton text="4"/>
        <NumberButton text="5"/>
        <NumberButton text="6"/>
        <ActionButton customButton="op-button" text="&#8722;" />
      </div>

      <div className="container">
        <NumberButton text="1"/>
        <NumberButton text="2"/>
        <NumberButton text="3"/>
        <ActionButton customButton="op-button" text="&#43;" />
      </div>

      <div className="container">
        <NumberButton customButton="wide-button" text="0" />
        <ActionButton customButton="op-button" text="=" />
      </div>
    </div>

  );
};

export default App;
