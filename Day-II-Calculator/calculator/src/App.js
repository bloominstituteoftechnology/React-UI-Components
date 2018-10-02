import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import Display from './components/DisplayComponents/CalculatorDisplay';


const numArray = [
  {
    number: 'clear',
    type: 'full'
  }, 
  {
    number: 7,
  }, 
  {
    number: 8,
  }, 
  {
    number: 9,
  }, 
  {
    number: 4,
  }, 
  {
    number: 5,
  }, 
  {
    number: 6,
  }, 
  {
    number: 1,
  }, 
  {
    number: 2,
  }, 
  {
    number: 3,
  }, 
  {
    number: 0,
    type: 'full',
  }
];

const actionArray = ['÷', 'x', '-', '+', '='];

const App = () => {
  return (
    <div className = 'app'>
      <Display/>
      {numArray.map(number => {
        return <NumberButton number = {number}/>;
      })}
      {actionArray.map(action => {
        return <ActionButton action = {action}/>;
      })}
    </div>
  );
};

export default App;
