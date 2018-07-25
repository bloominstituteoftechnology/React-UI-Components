import React from 'react';
import './App.css';
import NumberPadContainer from './components/ButtonComponents/NumberPadContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

function App () {
  return (
    <div className="calculator-wrapper">
    <CalculatorDisplay />
    <NumberPadContainer className="clear-button">
      <ActionButton className="three-text" text="clear" />
      <NumberButton extraStyles="r" text="/" />
    </NumberPadContainer>
    <NumberPadContainer>
      <NumberButton extraStyles="w" text="7" />
      <NumberButton extraStyles="w" text="8" />
      <NumberButton extraStyles="w" text="9" />
      <NumberButton extraStyles="r" text="X" />
    </NumberPadContainer>
    <NumberPadContainer>
      <NumberButton bgCextraStylesolor="w" text="4" />
      <NumberButton extraStyles="w" text="5" />
      <NumberButton extraStyles="w" text="6" />
      <NumberButton bgCoextraStyleslor="r" text="-" />
    </NumberPadContainer>
    <NumberPadContainer>
      <NumberButton extraStyles="w" text="1" />
      <NumberButton extraStyles="w" text="2" />
      <NumberButton extraStyles="w" text="3" />
      <NumberButton bgCextraStylesolor="r" text="+" />
    </NumberPadContainer>
    <NumberPadContainer>
      <ActionButton className="three-text" text="0" />
      <NumberButton extraStyles="r" text="=" />
    </NumberPadContainer>
  </div>
  )
}

export default App;
