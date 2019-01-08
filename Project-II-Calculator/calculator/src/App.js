import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import NumberButton from "./components/ButtonComponents/NumberButton"
import ActionButton from "./components/ButtonComponents/ActionButton"

const App = () => {

  return (
    <div className="containerContainer">
    <div className="calculatorContainer">
      <CalculatorDisplay />
      <div className="padContainer">
        <ActionButton text="clear" buttonStyle="action-button"/>
        <NumberButton text="÷" buttonStyle="operator-button" />
        <NumberButton text="7" buttonStyle="number-button" />
        <NumberButton text="8" buttonStyle="number-button" />
        <NumberButton text="9" buttonStyle="number-button" />
        <NumberButton text="×" buttonStyle="operator-button" />
        <NumberButton text="4" buttonStyle="number-button" />
        <NumberButton text="5" buttonStyle="number-button" />
        <NumberButton text="6" buttonStyle="number-button" />
        <NumberButton text="−" buttonStyle="operator-button" />
        <NumberButton text="1" buttonStyle="number-button" />
        <NumberButton text="2" buttonStyle="number-button" />
        <NumberButton text="3" buttonStyle="number-button" />
        <NumberButton text="+" buttonStyle="operator-button" />
        <ActionButton text="0" buttonStyle="action-button"/>
        <NumberButton text="=" buttonStyle="operator-button" />
      </div>
    </div>
    </div>
  );
};

export default App;

