import React from 'react';
import './App.css';
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";


const App = () => {
  return (
    <div className="calculator-app">
      <CalculatorDisplay/> 

      <ActionButton buttonStyle="clear-button" text="clear"/>
      <ActionButton buttonStyle="action-button" text="/"/>

      <NumberButton buttonStyle="number-button" text="7"/>
      <NumberButton buttonStyle="number-button" text="8"/>
      <NumberButton buttonStyle="number-button" text="9"/>
      <ActionButton buttonStyle="action-button" text="X"/>

      <NumberButton buttonStyle="number-button" text="4"/>
      <NumberButton buttonStyle="number-button" text="5"/>
      <NumberButton buttonStyle="number-button" text="6"/>
      <ActionButton buttonStyle="action-button" text="-"/>
      
      
      <NumberButton buttonStyle="number-button" text="3"/>
      <NumberButton buttonStyle="number-button" text="2"/>
      <NumberButton buttonStyle="number-button" text="1"/>
      <ActionButton buttonStyle="action-button" text="+"/>

      <ActionButton buttonStyle="zero-button" text="0"/>
      <ActionButton buttonStyle="action-button" text="="/>
    </div>
  );
};

export default App;
