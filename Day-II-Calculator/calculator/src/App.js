import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'; 
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
const App = () => {
  return (
    <div className="calculator-container">
      <div className="display">
        <CalculatorDisplay />
      </div>
      <div className="button-body">
        <div className="number-body">
          <ActionButton action="clear" class="clear-button"/>
          <NumberButton number="1"/>
          <NumberButton number="2" />
          <NumberButton number="3" />
          <NumberButton number="4" />
          <NumberButton number="5" />
          <NumberButton number="6" />
          <NumberButton number="7" />
          <NumberButton number="8" />
          <NumberButton number="9" />
          <NumberButton number="0" class="zero-button" />
        </div>
        <div className="operator-body">
          <ActionButton action="+"/>
          <ActionButton action="-" />
          <ActionButton action="*" />
          <ActionButton action="/" />
          <ActionButton action="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
