import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='app-container'>    
      <CalculatorDisplay total={0}/>
      <ActionButton display='clear'/>
      <div className='symbols'>
        <ActionButton display='='/>
        <ActionButton display='+'/>
        <ActionButton display='-'/>
        <ActionButton display='/'/>
        <ActionButton display='x'/>
      </div>
      <div className='numbers'>
        <NumberButton num='1'/>
        <NumberButton num='2'/>
        <NumberButton num='3'/>
        <NumberButton num='4'/>
        <NumberButton num='5'/>
        <NumberButton num='6'/>
        <NumberButton num='7'/>
        <NumberButton num='8'/>
        <NumberButton num='9'/>
      </div>
      <ActionButton display='0'/>
    </div>
  );
};

export default App;
