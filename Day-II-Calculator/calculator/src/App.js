import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import LongButton from './components/ButtonComponents/LongButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay />
      <LongButton buttonStyle="long" text="clear" />
      <ActionButton buttonStyle="action" text="&divide;" />
      <NumberButton buttonStyle="number" text="7" />
      <NumberButton buttonStyle="number" text="8" />
      <NumberButton buttonStyle="number" text="9" />
      <ActionButton buttonStyle="action" text="&times;" />
      <NumberButton buttonStyle="number" text="4" />
      <NumberButton buttonStyle="number" text="5" />
      <NumberButton buttonStyle="number" text="6" />
      <ActionButton buttonStyle="action" text="&minus;" />
      <NumberButton buttonStyle="number" text="1" />
      <NumberButton buttonStyle="number" text="2" />
      <NumberButton buttonStyle="number" text="3" />
      <ActionButton buttonStyle="action" text="&#43;" />
      <LongButton buttonStyle="longZero" text="0" />
      <ActionButton buttonStyle="action-bottom" text="&#61;" />
    </div>
  );
};

export default App;
