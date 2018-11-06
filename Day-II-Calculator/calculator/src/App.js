import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
const numbers =[
  7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3,'+'
];

const topButtons =[
  'clear', '÷'
]
const bottomButtons =[
  '0', '='
]
const placeHolder = [
  '0'
]

const App = () => {
  return (
    <div className = "container">
    
      <div className ="buttons">
        <CalculatorDisplay text = {placeHolder[0]}/>
        <div className = "top-buttons">
          {topButtons.map(num => { return <ActionButton text={num} buttonStyle='btn top-btn' href = '#' />; })}
        </div>
        <div >
          {numbers.map(num => { return <NumberButton text={num} buttonStyle='btn'/>;})}
        </div>
        <div className = "bottom-buttons">
          {bottomButtons.map(num => { return <ActionButton text={num} buttonStyle='btn btm-btn' />; })}
        </div>
      </div>
    </div>
  );
};

export default App;
