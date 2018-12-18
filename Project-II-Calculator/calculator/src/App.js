import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className="app">
      <div className="row">
        <CalculatorDisplay/>
      </div>
      <div className="row">
        <ActionButton buttonStyle="fat" text="clear"/>
        <ActionButton buttonStyle="function" text="/"/>
      </div>
      <div className="row">
        <NumberButton buttonStyle="function" text="7"/>
        <NumberButton buttonStyle="function" text="8"/>
        <NumberButton buttonStyle="function" text="9"/>
        <ActionButton buttonStyle="function" text="x"/>
      </div>
      <div className="row">
        <NumberButton buttonStyle="function" text="4"/>
        <NumberButton buttonStyle="function" text="5"/>
        <NumberButton buttonStyle="function" text="6"/>
        <ActionButton buttonStyle="function" text="-"/>
      </div>
      <div className="row">
        <NumberButton buttonStyle="function" text="1"/>
        <NumberButton buttonStyle="function" text="2"/>
        <NumberButton buttonStyle="function" text="3"/>
        <ActionButton buttonStyle="function" text="+"/>
      </div>
      <div className="row">
        <ActionButton buttonStyle="fat" text="0"/>
        <ActionButton buttonStyle="function" text="="/>
      </div>
    </div>
  );
};

export default App;
