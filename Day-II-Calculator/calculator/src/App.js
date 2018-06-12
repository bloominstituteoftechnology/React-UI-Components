import React from 'react';
import './App.css';
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/ButtonComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import OperatorButton from "./components/ButtonComponents/OperatorButton";


const App = () => {
  return (
    <div className = "numbers-container">
      <div className = "non-zero-numbers-container">
        <NumberButton buttonStyle = "non-zero-number-button-style" text = "1"/>
        <NumberButton buttonStyle = "non-zero-number-button-style" text = "2"/>
        <NumberButton buttonStyle = "non-zero-number-button-style" text = "3"/>
        <NumberButton buttonStyle = "non-zero-number-button-style" text = "4"/>
        <NumberButton buttonStyle = "non-zero-number-button-style" text = "5"/>
        <NumberButton buttonStyle = "non-zero-number-button-style" text = "6"/>
        <NumberButton buttonStyle = "non-zero-number-button-style" text = "7"/>
        <NumberButton buttonStyle = "non-zero-number-button-style" text = "8"/>
        <NumberButton buttonStyle = "non-zero-number-button-style" text = "9"/>
      </div>
      <div className = "zero-number-container">
        <NumberButton buttonStyle = "zero-number-button-style" text = "0"/>
      </div>
    </div>
  );
};

export default App;


