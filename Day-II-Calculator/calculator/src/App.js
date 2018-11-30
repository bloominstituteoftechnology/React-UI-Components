import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay />
      <div className="calculator">
        <div className="numbers">
          <NumberButton className="wide" text="Clear" />
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <NumberButton className="wide" text="0" />
        </div>
        <div className="actions">
          <ActionButton text="&divide;" />
          <ActionButton text="x" />
          <ActionButton text="-" />
          <ActionButton text="+" />
          <ActionButton text="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
