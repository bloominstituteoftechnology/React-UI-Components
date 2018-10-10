import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className="App">
      <div>
        <CalculatorDisplay />
      </div>
      <div className="row">
        <ActionButton style="plainActionButton" text="clear" />
        <NumberButton style="numberButtonRed" text="&#247;" />
      </div>
      <div className="row">
        <NumberButton style="numberButton" text="7" />
        <NumberButton style="numberButton" text="8" />
        <NumberButton style="numberButton" text="9" />
        <NumberButton style="numberButtonRed" text="&#215;" />
      </div>
      <div className="row">
        <NumberButton style="numberButton" text="4" />
        <NumberButton style="numberButton" text="5" />
        <NumberButton style="numberButton" text="6" />
        <NumberButton style="numberButtonRed" text="&#8722;" />
      </div>
      <div className="row">
        <NumberButton style="numberButton" text="3" />
        <NumberButton style="numberButton" text="2" />
        <NumberButton style="numberButton" text="1" />
        <NumberButton style="numberButtonRed" text="&#43;" />
      </div>
      <div className="row">
        <ActionButton style="boldActionButton"text="0" />
        <NumberButton style="numberButtonRed" text="&#61;" />
      </div>
    </div>
  );
};

export default App;
