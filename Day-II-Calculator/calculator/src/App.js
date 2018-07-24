import React from 'react';
import './App.css';
import CalculatorDisplay from'./components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div id= "App">
      <h3>Calculator</h3>
      <div className="calc">
        <div className="calc-display">
          <CalculatorDisplay />
        </div>
        <div className="calc-nums">
          <NumberButton />
        </div>
        <div className="calc-operators">
          <ActionButton />
        </div>
      </div>
    </div>
  );
};

export default App;
