import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'

const App = () => {
  return (
    <div className="App">
        <CalculatorDisplay value="0" />
        <ActionButton classname="button actionButton wide" value="Clear"/>
        <ActionButton classname="button actionButton" value="÷" />
        <NumberButton classname="button" value="7" />
        <NumberButton classname="button" value="8" />
        <NumberButton classname="button" value="9" />
        <ActionButton classname="button actionButton" value="X" />
        <NumberButton classname="button" value="4" />
        <NumberButton classname="button" value="5" />
        <NumberButton classname="button" value="6" />
        <ActionButton classname="button actionButton" value="-" />
        <NumberButton classname="button" value="1" />
        <NumberButton classname="button" value="2" />
        <NumberButton classname="button" value="3" />
        <ActionButton classname="button actionButton" value="+" />
        <NumberButton classname="button wide" value="0" />
        <ActionButton classname="button actionButton" value="=" />
    </div>
  );
};

export default App;
