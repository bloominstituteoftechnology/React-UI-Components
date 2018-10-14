import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton"
import ActionButton from "./components/ButtonComponents/ActionButton"
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import MathButton from "./components/ButtonComponents/MathButton"

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay text="0" buttonStyle="displayStyle" />
      <ActionButton text="clear" buttonStyle="actionButtonStyle" />
      <MathButton text="%" buttonStyle="mathButtonStyle"/>
      <NumberButton text="7" buttonStyle="numberButtonStyle"/>
      <NumberButton text="8" buttonStyle="numberButtonStyle"/>
      <NumberButton text="9" buttonStyle="numberButtonStyle"/>
      <MathButton text="*" buttonStyle="mathButtonStyle" />
      <NumberButton text="4" buttonStyle="numberButtonStyle"/>
      <NumberButton text="5" buttonStyle="numberButtonStyle"/>
      <NumberButton text="6" buttonStyle="numberButtonStyle"/>
      <MathButton text="-" buttonStyle="mathButtonStyle" />
      <NumberButton text="1" buttonStyle="numberButtonStyle"/>
      <NumberButton text="2" buttonStyle="numberButtonStyle"/>
      <NumberButton text="3" buttonStyle="numberButtonStyle"/>
      <MathButton text="+" buttonStyle="mathButtonStyle" />
      <ActionButton text="0" buttonStyle="actionButtonStyle"/>
      <MathButton text="=" buttonStyle="mathButtonStyle" />   
    </div>
  );
};

export default App;
