import React from 'react';
import './App.css';
import { NumberButton } from './components/ButtonComponents/NumberButton.js';
import { CalculatorDisplay } from './components/DisplayComponents/CalculatorDisplay.js';
import { ActionButton } from './components/ButtonComponents/ActionButton.js';
const App = () => {
  return (
    <div className="app-container">
      <div className="calculator-container">
        <div className="row">
          <CalculatorDisplay />
        </div>
        <div className="row">
            <ActionButton>Clear</ActionButton>
            <NumberButton>&#247;</NumberButton>
        </div>
        <div className="row">
          <NumberButton>7</NumberButton>
          <NumberButton>8</NumberButton>
          <NumberButton>9</NumberButton>
          <NumberButton>&times;</NumberButton>
        </div>
        <div className="row">
          <NumberButton>4</NumberButton>
          <NumberButton>5</NumberButton>
          <NumberButton>6</NumberButton>
          <NumberButton>-</NumberButton>
        </div>
        <div className="row">
          <NumberButton>1</NumberButton>
          <NumberButton>2</NumberButton>
          <NumberButton>3</NumberButton>
          <NumberButton>+</NumberButton>
        </div>
        <div className="row">
          <ActionButton>0</ActionButton>
          <NumberButton>=</NumberButton>
        </div>
      </div>
    </div>
  );
};

export default App;
