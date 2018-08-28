import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <div >
      <CalculatorDisplay />
      </div>
      
      <div className="clear-section" >
        <ActionButton text="clear" type="clear" />
        <ActionButton text="÷" type="divide" />
      </div>

      <div className="number-box" >
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <ActionButton text="x" type="multiply" />
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <ActionButton text="-" type="subtract" />
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <ActionButton text="+" type="add" />
      </div>

      <div className="zero-section" >
          <ActionButton text="0" type="zero" />
          <ActionButton text="=" type="total" />
      </div>
      
    </div>
  );
};

export default App;
