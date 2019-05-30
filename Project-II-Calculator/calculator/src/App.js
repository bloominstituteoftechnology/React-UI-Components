import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return (
    <div className = 'calculator-container'>
      <div className = 'calculator-display'>
        <CalculatorDisplay text='0' />
      </div> 
      
      <div className = "calculator-row">
        <NumberButton buttonStyle="action-button-clear"  text="clear" />
        <ActionButton buttonStyle="action-button" text="÷" />
      </div>

      <div className="calculator-row">
        <NumberButton buttonStyle="number-button" text="7" />
        <NumberButton buttonStyle="number-button" text="8" />
        <NumberButton buttonStyle="number-button" text="9" />
        <ActionButton buttonStyle="action-button" text="x" />
      </div>

      <div className="calculator-row">
        <NumberButton buttonStyle="number-button" text="4" />
        <NumberButton buttonStyle="number-button" text="5" />
        <NumberButton buttonStyle="number-button" text="6" />
        <ActionButton buttonStyle="action-button" text="-" />
      </div>

      <div className="calculator-row">
        <NumberButton buttonStyle="number-button" text="1" />
        <NumberButton buttonStyle="number-button" text="2" />
        <NumberButton buttonStyle="number-button" text="3" />
        <ActionButton buttonStyle="action-button" text="+" />
      </div>

      <div className="calculator-row">
        <NumberButton buttonStyle="action-button-zero" text="0" />
        <ActionButton buttonStyle="action-button" text="=" />
      </div>
    </div>
  );
};

export default App;
