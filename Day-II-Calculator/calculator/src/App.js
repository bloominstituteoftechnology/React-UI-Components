import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ClearButton from './components/ButtonComponents/ClearButton';
import ZerboButton from './components/ButtonComponents/ZeroButton';

const App = () => {

  const numArr = [{
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eigth: 8,
    nine: 9
  }]


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
      {numArr.map(number => {
        return (
          <NumberButton number={number} />
        )
      })}
      <CalculatorDisplay />
      <ClearButton />
      <ZerboButton />
    </div>
  );
};

export default App;
