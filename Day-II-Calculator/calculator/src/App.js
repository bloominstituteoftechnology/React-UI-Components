import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'

const App = () => {
  return (
    <div>
        <CalculatorDisplay value="0" />
        <ActionButton value="Clear"/>
        <ActionButton value="÷" />
        <NumberButton value="7" />
        <NumberButton value="8" />
        <NumberButton value="9" />
        <ActionButton value="X" />
        <NumberButton value="4" />
        <NumberButton value="5" />
        <NumberButton value="6" />
        <ActionButton value="-" />
        <NumberButton value="1" />
        <NumberButton value="2" />
        <NumberButton value="3" />
        <ActionButton value="+" />
        <NumberButton value="0" />
        <ActionButton value="=" />
    </div>
  );
};

export default App;
