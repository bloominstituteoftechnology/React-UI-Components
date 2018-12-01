import React from 'react';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return ( 
    < div className="container">
      <CalculatorDisplay />
      < div className="row">
        <ActionButton text="Clear" />
        <NumberButton text="÷" type="symbol" />
      </div> 
      <div className="row">
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <NumberButton text="×" type="symbol"/>
      </div>
      <div className="row">
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton text="-" type="symbol" />
      </div>
      <div className="row">
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <NumberButton text="+" type="symbol" />
      </div>
      < div className="row">
        <ActionButton text="0" />
        <NumberButton text="=" type="symbol" />
       </div> 
    </div> 
  ); 
}; 

export default App;