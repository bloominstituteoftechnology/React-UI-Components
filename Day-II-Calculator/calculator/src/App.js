import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div class='container'>
      <div class='row'>
        <CalculatorDisplay />
      </div>
      <div class='row'>
        <ActionButton text="clear"  extraStyle="clear" />
        <NumberButton text="&#247;" extraStyle="operator" />
      </div>
      <div class='row'>
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <NumberButton text="&#215;" extraStyle="operator" />
      </div>
      <div class='row'>
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton text="&#8722;" extraStyle="operator" />
      </div>
      <div class='row'>
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <NumberButton text="&#43;" extraStyle="operator" />
      </div>
      <div class='row'>
        <ActionButton text="0" />
        <NumberButton text="&#61;" extraStyle="operator" />
      </div>
    </div>
  );
};

export default App;
