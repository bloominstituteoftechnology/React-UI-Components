import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'


const App = () => {
  return (
    <div class= "container">
      <div>
        <CalculatorDisplay customClass= "calc-screen"/>
      </div>
      <div class= "white">
        <ActionButton customClass= "regWeight large" value= "clear" />
        <div class= "numb-btns">
          <NumberButton customClass= "bold small" value= "7" />
          <NumberButton customClass= "bold small" value= "8" />
          <NumberButton customClass= "bold small" value= "9" />
          <NumberButton customClass= "bold small" value= "4" />
          <NumberButton customClass= "bold small" value= "5" />
          <NumberButton customClass= "bold small" value= "6" />
          <NumberButton customClass= "bold small" value= "1" />
          <NumberButton customClass= "bold small" value= "2" />
          <NumberButton customClass= "bold small" value= "3" />
        </div>
        <ActionButton customClass= "bold large" value= "0" />
      </div>
      <div class= "red">
        <NumberButton customClass= "bold small" value= "÷" />
        <NumberButton customClass= "bold small" value= "×" />
        <NumberButton customClass= "bold small" value= "-" />
        <NumberButton customClass= "bold small" value= "+" />
        <NumberButton customClass= "bold small" value= "=" />
      </div>
    </div>
  );
};

export default App;
