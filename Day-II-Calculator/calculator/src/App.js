import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator-wrapper" >
      <CalculatorDisplay />
      <ActionButton text="clear" />
      <NumberButton text="&#247;" extraStyles="operator-styles" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <NumberButton text="&times;" extraStyles="operator-styles" />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <NumberButton text="&minus;" extraStyles="operator-styles" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <NumberButton text="+" extraStyles="operator-styles" />
      <ActionButton text="0" extraStyles="num-styles action-styles" />
      <NumberButton text="=" extraStyles="operator-styles" />
    </div>
  );
};

export default App;
