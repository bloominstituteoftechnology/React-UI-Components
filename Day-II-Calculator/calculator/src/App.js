import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay display="0" displayType = "hodisplay"/>
      
      {/* <NumberButton number={0} displayType = {"n" + i.toString() + "-button"} /> */}
      <NumberButton number={0} displayType = "zero-button number"/>
      <NumberButton number={1} displayType = "one-button number"/>
      <NumberButton number={2} displayType = "two-button number"/>
      <NumberButton number={3} displayType = "three-button number"/>
      <NumberButton number={4} displayType = "four-button number"/>
      <NumberButton number={5} displayType = "five-button number"/>
      <NumberButton number={6} displayType = "six-button number"/>
      <NumberButton number={7} displayType = "seven-button number"/>
      <NumberButton number={8} displayType = "eight-button number"/>
      <NumberButton number={9} displayType = "nine-button number"/>
      
      <ActionButton type='clear' displayType = "clear-button number"/>
      <ActionButton type='÷' displayType = "divide-button action"/>
      <ActionButton type='x' displayType = "multiply-button action"/>
      <ActionButton type='-' displayType = "minus-button action"/>
      <ActionButton type='+' displayType = "add-button action"/>
      <ActionButton type='=' displayType = "equals-button action"/>
    </div>
  );
};

export default App;
