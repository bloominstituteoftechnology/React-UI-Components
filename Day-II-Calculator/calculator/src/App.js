import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return (
    <div class="calculator-container">
      <div class="display">
        <CalculatorDisplay buttonStyle="calculator-display" text="0"/>
      </div>
      <div class="button-container">
        <div class="column-left">
          <div class="inner-full-row">
            <ActionButton buttonStyle="clear-button" text="Clear"/>
          </div>

          <NumberButton buttonStyle="number-button" text="7"/>
          <NumberButton buttonStyle="number-button" text="8"/>
          <NumberButton buttonStyle="number-button" text="9"/>
          <NumberButton buttonStyle="number-button" text="4"/>
          <NumberButton buttonStyle="number-button" text="5"/>
          <NumberButton buttonStyle="number-button" text="6"/>
          <NumberButton buttonStyle="number-button" text="1"/>
          <NumberButton buttonStyle="number-button" text="2"/>
          <NumberButton buttonStyle="number-button" text="3"/>
          
          <div class="inner-full-row">
            <ActionButton buttonStyle="action-button" text="0"/>
          </div>
          
        </div>
        <div class="column-right">
          <NumberButton buttonStyle="operator-button" text="÷"/>
          <NumberButton buttonStyle="operator-button" text="x"/>
          <NumberButton buttonStyle="operator-button" text="-"/>
          <NumberButton buttonStyle="operator-button" text="+"/>
          <NumberButton buttonStyle="operator-button" text="="/>
        </div>
        
        
      </div>
    </div>
  );
};

export default App;
