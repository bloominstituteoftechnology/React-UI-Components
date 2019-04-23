import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ActionsDisplay from './components/DisplayComponents/ActionsDisplay';

const Numbers = [9,8,,7,6,5,4,3,2,1,0];

//const Actions = ['-', '+', '=', 'X', 'clear'];


const App = (props) => {
  return (
    <div>
      <CalculatorDisplay />
      {Numbers.map(number => {
        return <NumberButton text={number}/>
      })}

      <ActionsDisplay />
      
    </div>
    
  );
};

export default App;
