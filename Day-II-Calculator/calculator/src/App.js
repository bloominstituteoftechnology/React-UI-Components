import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';



const App = () => {
  return (
    <div className= 'App'>
      <CalculatorDisplay num={0} />
      <div className ='allButtons'>
      <div className = 'Number-Buttons'>
      <div className = 'bigButtons clear'>
      <ActionButton text = 'clear' />
      </div>
        <NumberButton num ={7} />
        <NumberButton num ={8} />
        <NumberButton num ={9} />
        <NumberButton num ={4} />
        <NumberButton num ={5} />
        <NumberButton num ={6} />
        <NumberButton num ={1} />
        <NumberButton num ={2} />
        <NumberButton num ={3} />
        <div className = 'bigButtons'>
      <ActionButton text = '0' />
      </div>
        
      </div>
      <div className='ActionButtons'>
        <ActionButton text ='/' />
        <ActionButton text ='*' />
        <ActionButton text ='-' />
        <ActionButton text ='+' />
        <ActionButton text ='=' />
        
      </div>
      </div>
  
    </div>
  );
};

export default App;
