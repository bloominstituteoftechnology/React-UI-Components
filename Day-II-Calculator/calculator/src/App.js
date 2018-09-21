import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  const data = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    equals: false,
    plus: false,
    subtract: false,
    multiple: false,
    divide: false,
    clear: false,
    display: 0,
  }
  return (
    <div className="calculator">

    </div>
  );
};

export default App;
