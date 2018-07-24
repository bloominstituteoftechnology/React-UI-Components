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
    
    <NumberButton text="clear" extraStyles="long-btn clear" />
    <ActionButton text="÷" extraStyles="operator" />
    </div>
    <div className="row second-row">
    <NumberButton text="7" extraStyles="number 7" />
    <NumberButton text="8" extraStyles="number 8" />
    <NumberButton text="9" extraStyles="number 9" />
    <ActionButton text="×" extraStyles="operator *" />
    </div>
    <div className="row third-row">
    <NumberButton text="4" extraStyles="number 4" />
    <NumberButton text="5" extraStyles="number 5" />
    <NumberButton text="6" extraStyles="number 6" />
    <ActionButton text="-" extraStyles="operator -" />
  </div>
    <div className="row fourth-row">
    <NumberButton text="1" extraStyles="number 1" />
    <NumberButton text="2" extraStyles="number 2" />
    <NumberButton text="3" extraStyles="number 3" />
    <ActionButton text="+" extraStyles="operator +" />
  </div>
    <div className="row fifth-row">
    <NumberButton text="0" extraStyles="number long-btn 0" />
    <ActionButton text="=" extraStyles="operator =" />

</div>
  </div>
  );
};

export default App;
