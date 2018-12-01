import React from 'react';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return ( 
    < div className="container">
    <CalculatorDisplay />
      < div className="row">
        <ActionButton text="Clear" />
        <NumberButton text="÷" />
        < /div> 
        < div className="row">
        <ActionButton text="0" />
        
        < /div> 
    < /div> 
  ); 
}; 

export default App;