import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  // let number

  return (
    <div className='app'>
        <CalculatorDisplay number='0' background='btn__xlong'/>
        <ActionButton number='clear' background='btn__long'/>
        <NumberButton number='%' background='btn__red'/>
        <NumberButton number='9'/>
        <NumberButton number='8'/>
        <NumberButton number='7'/>
        <NumberButton number='X' background='btn__red'/>
        <NumberButton number='6'/>
        <NumberButton number='5'/>
        <NumberButton number='4'/>
        <NumberButton number='-' background='btn__red'/>        
        <NumberButton number='3'/>
        <NumberButton number='2'/>
        <NumberButton number='1'/>
        <NumberButton number='+' background='btn__red'/>
        <ActionButton number='0' background='btn__long'/>
        <NumberButton number='=' background='btn__red'/>
    </div>
  );
};

export default App;
