import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return <div className="container">
      <CalculatorDisplay />
      <ActionButton text="clear" />
      <NumberButton text="&#247;" color="red"/>

      <NumberButton text="7" color="white" />
    <NumberButton text="8" color="white" />
    <NumberButton text="9" color="white" />
      <NumberButton text="x" color="red" />

    <NumberButton text="4" color="white" />
    <NumberButton text="5" color="white"/>
      <NumberButton text="6" color="white" />
      <NumberButton text="-" color="red" />

    <NumberButton text="1" color="white"/>
    <NumberButton text="2" color="white"/>
    <NumberButton text="3" color="white"/>
      <NumberButton text="+" color="red" />
        
      <ActionButton text="0" />
      <NumberButton text="=" color="red" />
      
    </div>;
};

export default App;
