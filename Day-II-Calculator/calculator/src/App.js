import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';



const App = () => {
  
  return (
   <div className= "container">

    <CalculatorDisplay />
    

    <ActionButton className = "clear" text= "clear" />
    <NumberButton bgColor= "red-button" text = "/" />

    <NumberButton text = "7" />
    <NumberButton  text = "8" />
    <NumberButton text = "9" />
    <NumberButton bgColor= "red-button" text = "X" />

    <NumberButton  text = "4" />
    <NumberButton text = "5" />
    <NumberButton  text = "6" />
    <NumberButton bgColor= "red-button" text = "-" />


    <NumberButton  text = "1" />
    <NumberButton  text = "2" />
    <NumberButton  text = "3" />
    <NumberButton bgColor= "red-button" text = "+" />

    <ActionButton className = "zero" text="0" /> 
    <NumberButton bgColor= "red-button" text = "=" />

    </div>
  );
};

export default App;
