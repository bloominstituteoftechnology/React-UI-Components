import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div class='calculatorContainer'>
      <CalculatorDisplay name="0"/>
      <div class="inputButtons">
        <div class="leftSideInput">
          <ActionButton customActionStyle="clear-button" name="clear" />
          <div class="nineNumberButtons">
            <NumberButton name="7" />
            <NumberButton name="8" />
            <NumberButton name="9" />
            <NumberButton name="4" />
            <NumberButton name="5" />
            <NumberButton name="6" />
            <NumberButton name="1" />
            <NumberButton name="2" />
            <NumberButton name="3" />
          </div>
          <NumberButton customNumberStyle="zero-button" name="0" />
        </div>
      <div class="rightSideInput">
        <ActionButton name="÷" />
        <ActionButton name="×" />
        <ActionButton name="−" />
        <ActionButton name="+" />
        <ActionButton name="=" />        
      </div>
    </div>
  </div>

  );
};

export default App;
