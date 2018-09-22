import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'

const App = () => {
  return (
    <div className="App">
        <CalculatorDisplay value="0" />
        <ActionButton buttonStyle="button actionButton wide" text="Clear"/>
        <ActionButton buttonStyle="button actionButton" text="÷" />
        <NumberButton buttonStyle="button" text="7" />
        <NumberButton buttonStyle="button" text="8" />
        <NumberButton buttonStyle="button" text="9" />
        <ActionButton buttonStyle="button actionButton" text="X" />
        <NumberButton buttonStyle="button" text="4" />
        <NumberButton buttonStyle="button" text="5" />
        <NumberButton buttonStyle="button" text="6" />
        <ActionButton buttonStyle="button actionButton" text="-" />
        <NumberButton buttonStyle="button" text="1" />
        <NumberButton buttonStyle="button" text="2" />
        <NumberButton buttonStyle="button" text="3" />
        <ActionButton buttonStyle="button actionButton" text="+" />
        <NumberButton buttonStyle="button wide" text="0" />
        <ActionButton buttonStyle="button actionButton" text="=" />
    </div>
  );
};

export default App;
