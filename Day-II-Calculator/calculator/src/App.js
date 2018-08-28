import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="app-container">
      <div className="calc-container">
        <CalculatorDisplay />
        
        <div className="button-row">
          <ActionButton buttonStyle="big-btn" text="clear"/>
          <NumberButton buttonStyle="calc-btn" text="/"/>
        </div>

        <div className="button-row">
          <NumberButton buttonStyle="small-btn" text="7"/>
          <NumberButton buttonStyle="small-btn" text="8"/>
          <NumberButton buttonStyle="small-btn" text="9"/>
          <NumberButton buttonStyle="calc-btn" text="x"/>
        </div>

        <div className="button-row">
          <NumberButton buttonStyle="small-btn" text="4"/>
          <NumberButton buttonStyle="small-btn" text="5"/>
          <NumberButton buttonStyle="small-btn" text="6"/>
          <NumberButton buttonStyle="calc-btn" text="-"/>
        </div>

        <div className="button-row">
          <NumberButton buttonStyle="small-btn" text="1"/>
          <NumberButton buttonStyle="small-btn" text="2"/>
          <NumberButton buttonStyle="small-btn" text="3"/>
          <NumberButton buttonStyle="calc-btn" text="+"/>
        </div>

        <div className="button-row">
          <ActionButton buttonStyle="big-btn" text="0"/>
          <NumberButton buttonStyle="calc-btn" text="="/>
        </div>
      </div>
    </div>
  );
};

export default App;
