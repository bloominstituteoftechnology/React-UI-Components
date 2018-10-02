import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';


const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay className="calcdisplayContainer" text='0'/>
      
      <ActionButton className='.actionbutton' text='clear'/>

      <NumberButton className='.numberbutton' text='7'/>
      <NumberButton className='.numberbutton' text='8'/>
      <NumberButton className='.numberbutton' text='9'/>
      <NumberButton className='.numberbutton' text='4'/>
      <NumberButton className='.numberbutton' text='5'/>
      <NumberButton className='.numberbutton' text='6'/>
      <NumberButton className='.numberbutton' text='1'/>
      <NumberButton className='.numberbutton' text='2'/>
      <NumberButton className='.numberbutton' text='3'/>

      <ActionButton className='.actionbutton' text='0'/>
    </div>
  );
};

export default App;
