import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className = "calc-wrapper">
      <CalculatorDisplay />
      <div className = "btn-wrapper">
        <ActionButton text="clear" />
        <NumberButton text="÷" />
      </div>
      <div className = "btn-wrapper">
        <NumberButton text="7" />
        <NumberButton text="8"/>
        <NumberButton text="9"/>
        <NumberButton text="X"/>
      </div>
      <div className = "btn-wrapper">
        <NumberButton text="4"/>
        <NumberButton text="5"/>
        <NumberButton text="6" />
        <NumberButton text="-"/>
      </div>
      <div className = "btn-wrapper">
        <NumberButton text="1" />
        <NumberButton text="2"/>
        <NumberButton text="3"/>
        <NumberButton text="+"/>
      </div>
      <div className = "btn-wrapper">
        <ActionButton text="0"/>
        <NumberButton text="="/>
      </div>
    </div>
  );
};

export default App;
