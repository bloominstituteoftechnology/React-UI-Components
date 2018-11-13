import React from "react";
import "./App.css";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className='app-container'>
    <NumberButton text = '0'  buttonStyle ='top-btn'/>
    <div class='box'>
      <ActionButton text = 'clear' buttonStyle = 'medium-btn'/>
      <NumberButton text = '÷' buttonStyle = 'small-btn red'/>
    </div>
    <div class='box'>
      <NumberButton text = '7' buttonStyle = 'small-btn white'/>
      <NumberButton text = '8' buttonStyle = 'small-btn white'/>
      <NumberButton text = '9' buttonStyle = 'small-btn white'/>
      <NumberButton text = 'X' buttonStyle = 'small-btn red'/>
    </div>
    <div class='box'>
      <NumberButton text = '4' buttonStyle = 'small-btn white'/>
      <NumberButton text = '5' buttonStyle = 'small-btn white'/>
      <NumberButton text = '6' buttonStyle = 'small-btn white'/>
      <NumberButton text = '-' buttonStyle = 'small-btn red'/>
    </div>
    <div class='box'>
      <NumberButton text = '1' buttonStyle = 'small-btn white'/>
      <NumberButton text = '2' buttonStyle = 'small-btn white'/>
      <NumberButton text = '3' buttonStyle = 'small-btn white'/>
      <NumberButton text = '+' buttonStyle = 'small-btn red'/>
    </div>
    <div class='box'>
      <ActionButton text = '0' buttonStyle = 'medium-btn'/>
      <NumberButton text = '=' buttonStyle = 'small-btn red'/>
    </div>
    </div>
  );
};

export default App;
