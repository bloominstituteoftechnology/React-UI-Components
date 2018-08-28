import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <div className="row">
        <ActionButton buttonStyle="action" text="clear"/>
        <ActionButton buttonStyle="action math" text="÷"/>
      </div>
      <div className="row">
        <NumberButton buttonStyle="number" text="7"/>
        <NumberButton buttonStyle="number" text="8"/>
        <NumberButton buttonStyle="number" text="9"/>
        <ActionButton buttonStyle="action math" text="x"/>
      </div>
      <div className="row">
        <NumberButton buttonStyle="number" text="4"/>
        <NumberButton buttonStyle="number" text="5"/>
        <NumberButton buttonStyle="number" text="6"/>
        <ActionButton buttonStyle="action math" text="−"/>
      </div>
      <div className="row">
        <NumberButton buttonStyle="number" text="1"/>
        <NumberButton buttonStyle="number" text="2"/>
        <NumberButton buttonStyle="number" text="3"/>
        <ActionButton buttonStyle="action math" text="+"/>
      </div>
      <div className="row">
        <ActionButton buttonStyle="action" text="0"/>
        <ActionButton buttonStyle="action math" text="="/>
      </div>
    </div>
  );
};


export default App;


