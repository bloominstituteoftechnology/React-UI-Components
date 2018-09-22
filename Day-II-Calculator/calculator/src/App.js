import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton"


const App = () => {
  return (
    <div className="container">
        <CalculatorDisplay/>
        <div className="action-container">
          <div className="mid-container">
            <ActionButton buttonStyle ="action-clear" text="clear"/>
            <NumberButton buttonStyle="btn-number" text="7"/>
            <NumberButton buttonStyle="btn-number" text="8"/>
            <NumberButton buttonStyle="btn-number" text="9"/>
            <NumberButton buttonStyle="btn-number" text="4"/>
            <NumberButton buttonStyle="btn-number" text="5"/>
            <NumberButton buttonStyle="btn-number" text="6"/>
            <NumberButton buttonStyle="btn-number" text="1"/>
            <NumberButton buttonStyle="btn-number" text="2"/>
            <NumberButton buttonStyle="btn-number" text="3"/>
            <ActionButton buttonStyle="action-clear" text="0"/>
          </div>
          <div className ="mid-action">
              <ActionButton buttonStyle="action-red" text="&divide;"/>
              <ActionButton buttonStyle="action-red" text="&times;"/>
              <ActionButton buttonStyle="action-red" text="&mdash;"/>
              <ActionButton buttonStyle="action-red" text="+"/>
              <ActionButton buttonStyle="action-red" text="="/> 
          </div>
        </div>
    </div>
  );
};

export default App;
