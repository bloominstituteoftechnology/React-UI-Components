import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';



const App = () => {
  
  return (
   <div>

    <CalculatorDisplay />
    
    <div className = "buttonone">
    <ActionButton className = "clear" text= "clear" />
    <NumberButton bgColor= "red-button" text = "/" />
    </div>
    <div className = "buttontwo">
    <NumberButton bgColor= "num-butt" text = "7" />
    <NumberButton bgColor= "num-butt" text = "8" />
    <NumberButton bgColor= "num-butt" text = "9" />
    <NumberButton bgColor= "red-button" text = "X" />
    </div>

<div className ="buttonthree">
    <NumberButton bgColor= "num-butt" text = "4" />
    <NumberButton bgColor= "num-butt" text = "5" />
    <NumberButton bgColor= "num-butt" text = "6" />
    <NumberButton bgColor= "red-button" text = "-" />
</div>

<div className = "buttonfour">
    <NumberButton bgColor= "num-butt" text = "1" />
    <NumberButton bgColor= "num-butt" text = "2" />
    <NumberButton bgColor= "num-butt" text = "3" />
    <NumberButton bgColor= "red-button" text = "+" />
  
  </div>

<div className = "buttonfive">
    <ActionButton className = "zero" text="0" /> 
    <NumberButton bgColor= "red-button" text = "=" />
</div>

    </div>
  );
};

export default App;
