import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  // render() {
    return (
  <div className="calculator-wrapper">
  <CalculatorDisplay />
  <ActionButton className="three-text" text="clear" />
  <NumberButton bgColor="red-button" text="/"/>

  <NumberButton bgColor="num-button" text="7" />
  <NumberButton bgColor="num-button" text="8" />
  <NumberButton bgColor="num-button" text="9" />
  <NumberButton bgColor="num-button" text="X" />

  <NumberButton bgColor="num-button" text="4" />
  <NumberButton bgColor="num-button" text="5" />
  <NumberButton bgColor="num-button" text="6" />
  <NumberButton bgColor="num-button" text="-" />

  <NumberButton bgColor="num-button" text="1" />
  <NumberButton bgColor="num-button" text="2" />
  <NumberButton bgColor="num-button" text="3" />
  <NumberButton bgColor="num-button" text="+" />

  <ActionButton className="three-text" text="0" />
  <NumberButton bgColor="red-button" text="=" />
  </div>
      );
    // }
  }

export default App;
