import React from 'react';
import './App.css';

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <ActionButton buttonStyle="clear" text="clear"/>
      <NumberButton buttonStyle="red" text="/"/>
      <NumberButton buttonStyle="white" text="7"/>
      <NumberButton buttonStyle="white" text="8"/>
      <NumberButton buttonStyle="white" text="9"/>
      <NumberButton buttonStyle="red" text="X"/>
      <NumberButton buttonStyle="white" text="4"/>
      <NumberButton buttonStyle="white" text="5"/>
      <NumberButton buttonStyle="white" text="6"/>
      <NumberButton buttonStyle="red" text="-"/>
      <NumberButton buttonStyle="white" text="1"/>
      <NumberButton buttonStyle="white" text="2"/>
      <NumberButton buttonStyle="white" text="3"/>
      <NumberButton buttonStyle="red" text="+"/>
      <ActionButton buttonStyle="zero" text="0"/>
      <NumberButton buttonStyle="red" text="="/>
      
      
    </div>
  );
};

export default App;
