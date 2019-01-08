import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";



const App = () => {
  return (
    <div className="calculator">
      
      <CalculatorDisplay />
      <ActionButton buttonStyle={"actionButton"} text={"Clear"}/>
      <NumberButton buttonStyle={"numberButton"} text={"9"}/>
    </div>
  );
};

export default App;
