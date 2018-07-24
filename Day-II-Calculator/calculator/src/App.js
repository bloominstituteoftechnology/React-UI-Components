import React from 'react';
import './App.css';
import ActionButton from "./components/ButtonComponents/ActionButton.js"
import NumberButton from "./components/ButtonComponents/NumberButton.js"
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay.js"

const App = () => {
  return (
    <div>
    <CalculatorDisplay />
    <div className="row first-row">
    
    <NumberButton text="clear" extraStyles="long-btn" />
    <ActionButton text="÷" extraStyles="operator" />
    </div>
    <div className="row second-row">
    <NumberButton text="9" extraStyles="number" />
    <NumberButton text="8" extraStyles="number" />
    <NumberButton text="7" extraStyles="number" />
    <ActionButton text="×" extraStyles="operator" />
    </div>
    <div className="row third-row">
    <NumberButton text="6" extraStyles="number" />
    <NumberButton text="5" extraStyles="number" />
    <NumberButton text="4" extraStyles="number" />
    <ActionButton text="-" extraStyles="operator" />
  </div>
    <div className="row fourth-row">
    <NumberButton text="3" extraStyles="number" />
    <NumberButton text="2" extraStyles="number" />
    <NumberButton text="1" extraStyles="number" />
    <ActionButton text="+" extraStyles="operator" />
  </div>
    <div className="row fifth-row">
    <NumberButton text="0" extraStyles="number long-btn" />
    <ActionButton text="=" extraStyles="operator" />

</div>
  </div>
  );
};

export default App;
