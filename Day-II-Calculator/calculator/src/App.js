import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return (
    <div>
      <div class="button-container">
        <CalculatorDisplay buttonStyle="calculator-display" text="0"/>
        <ActionButton buttonStyle="action-button" text="Clear"/>
        <NumberButton buttonStyle="operator-button" text="÷"/>
        <NumberButton buttonStyle="number-button" text="7"/>
        <NumberButton buttonStyle="number-button" text="8"/>
        <NumberButton buttonStyle="number-button" text="9"/>
        <NumberButton buttonStyle="operator-button" text="x"/>
        <NumberButton buttonStyle="number-button" text="4"/>
        <NumberButton buttonStyle="number-button" text="5"/>
        <NumberButton buttonStyle="number-button" text="6"/>
        <NumberButton buttonStyle="operator-button" text="-"/>
        <NumberButton buttonStyle="number-button" text="1"/>
        <NumberButton buttonStyle="number-button" text="2"/>
        <NumberButton buttonStyle="number-button" text="3"/>
        <NumberButton buttonStyle="operator-button" text="+"/>
        <ActionButton buttonStyle="action-button" text="0"/>
        <NumberButton buttonStyle="operator-button" text="="/>
      </div>
    </div>
  );
};

export default App;
