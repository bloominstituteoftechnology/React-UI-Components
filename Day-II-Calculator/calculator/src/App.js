import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay displayValue="0" />
      <div className="keypad">

        <ActionButton value="Clear" />
        <div className="num-keys">

          <NumberButton value="9" />
          <NumberButton value="8" />
          <NumberButton value="7" />
          <NumberButton value="6" />
          <NumberButton value="5" />
          <NumberButton value="4" />
          <NumberButton value="3" />
          <NumberButton value="2" />
          <NumberButton value="1" />
          <NumberButton value="0" />
        </div>
        <div className="math">
        
          <ActionButton value="/" />
          <ActionButton value="*" />
          <ActionButton value="-" />
          <ActionButton value="+" />
          <ActionButton value="=" />
        </div>
      </div>

    </div>
  );
};

export default App;
