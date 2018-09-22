import React from 'react';
import './App.css';
import CalDisplay from './components/DisplayComponents/CalculatorDisplay';

const data = {
  clear: "clear",
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  divide: "\xF7",
  multiply: "\xD7",
  subtract: "\u2013",
  add: "+",
  equals: "=", 
}

const App = () => {
  return (
    <div>
      <CalDisplay data={data} displayStyle="black-box" />
    </div>
  );
};

export default App;
