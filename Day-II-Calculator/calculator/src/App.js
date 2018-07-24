import React from 'react';
import './App.css';
// import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";


const App = () => {
  return (
    <div className="calculator-app">

      <CalculatorDisplay/> 


      <NumberButton buttonStyle="number-button" text="2"/>
      <NumberButton buttonStyle="number-button" text="1"/>

    </div>
  );
};

export default App;
