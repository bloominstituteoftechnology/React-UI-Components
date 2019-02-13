import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/DisplayComponents/NumberButton'
import ActionButton form './components/DisplayComponents/ActionButton'
const App = () => {
  return (
    <div className= "">
     <CalculatorDisplay />
     <div className="">
    <NumberButton />
    <ActionButton />
    </div>
    </div>
  );
};

export default App;
