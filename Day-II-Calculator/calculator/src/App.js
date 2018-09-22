import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'

const App = () => {
  return (
    <div>
        <CalculatorDisplay value="0" />
        <ActionButton value="Clear" />
        <NumberButton value="7" />
    </div>
  );
};

export default App;
