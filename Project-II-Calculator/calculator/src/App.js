import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
     <NumberButton buttonStyle='gray' text='1'/>
     <NumberButton buttonStyle='gray' text='2'/>
     <NumberButton buttonStyle='gray' text='3'/>
     <NumberButton buttonStyle='gray' text='4'/>
     <NumberButton buttonStyle='gray' text='5'/>
     <NumberButton buttonStyle='gray' text='6'/>
     <NumberButton buttonStyle='gray' text='7'/>
     <NumberButton buttonStyle='gray' text='8'/>
     <NumberButton buttonStyle='gray' text='9'/>

     <ActionButton text='clear' buttonStyle='yellow'/>
     <ActionButton text='0'/>

     <CalculatorDisplay />
    </div>
  );
};

export default App;
