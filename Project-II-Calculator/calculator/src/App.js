import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer'
/* 
CalculatorDisplay 
ButtonContainer
*/
const numbers = [
  {text : '1'}
  ,
  {
    text : '2'
  }
  ,
  {
    text : '3'
  }
  ,
  {
    text : '4'
  }
  ,
  {
    text : '5'
  },
  {
    text : '6'
  },
  {
    text : '7'
  },
  {
    text : '8'
  },
  {
    text : '9'
  },
]

const symbols = [
  {text : '/'}
  ,
  {
    text : 'x'
  }
  ,
  {
    text : '-'
  }
  ,
  {
    text : '+'
  }
  ,
  {
    text : '='
  },
]

const App = () => {
  return (
    <div>
     <div className="card-container">
        <CalculatorDisplay />
        <ButtonContainer numbers={numbers} symbols={symbols} />
      </div>
    </div>
   
  );
};

/*

const App = () => {
  return (
    <div className="card-container">
      {numbers.map(number => (
        <NumberButton number={number} />
      ))}
      <CalculatorDisplay />
      <ButtonContainer />
    </div>
  );
}; */

export default App;