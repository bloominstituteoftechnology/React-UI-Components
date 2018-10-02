import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ClearButton from './components/ButtonComponents/ClearButton';
import ZerboButton from './components/ButtonComponents/ZeroButton';

const App = () => {



  const arithmeticBtn = [
    {
      add: "+",
      subtract: "-",
      multiply: "x",
      divide: "÷",
      equal: "="

    }]
  
  return (
    <div className="container">
      {arithmeticBtn.map(math => {
        return (
          <ActionButton arithmetic={math} />
        )
      })}
      <NumberButton />
      <CalculatorDisplay />
      <ClearButton />
      <ZerboButton />
    </div>
  );
};

export default App;
