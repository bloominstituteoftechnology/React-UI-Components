import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div className="app">

      <div className="row calculator">
        <CalculatorDisplay className="calc-display" number="3.14"/>

        <div className="row">
          <ActionButton action="clear"/>
          <ActionButton action="÷"/>
        </div>

        <div className="row">
          <NumberButton number="7"/>
          <NumberButton number="8"/>
          <NumberButton number="9"/>
          <ActionButton action="X"/>
        </div>

        <div className="row">
          <NumberButton number="4"/>
          <NumberButton number="5"/>
          <NumberButton number="6"/>
          <ActionButton action="-"/>
        </div>

        <div className="row">
          <NumberButton number="1"/>
          <NumberButton number="2"/>
          <NumberButton number="3"/>
          <ActionButton action="+"/>
        </div>

        <div className="row">
          <NumberButton number="0"/>
          <ActionButton action="="/>
        </div>
      </div>
    </div>
  );
};

export default App;
