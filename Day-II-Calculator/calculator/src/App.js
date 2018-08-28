
import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import './components/ButtonComponents/Button.css';
import './components/DisplayComponents/Display.css'




const App = () => {
  return (
    <div className='App'>
      <CalculatorDisplay />

      <ActionButton buttonStyle='clear' text = 'clear'/>

      <NumberButton buttonStyle='number' text='7' />
      <NumberButton buttonStyle= 'number' text='8' />
      <NumberButton buttonStyle='number' text='9' />
      <NumberButton buttonStyle='number' text='4' />
      <NumberButton buttonStyle='number' text='5' />
      <NumberButton buttonStyle='number' text='6'/>
      <NumberButton buttonStyle='number' text='1' />
      <NumberButton buttonStyle='number' text='2'/>
      <NumberButton buttonStyle='number' text='3'/>

      <NumberButton buttonStyle='operator' text='/' />
      <NumberButton buttonStyle='operator' text='X'/>
      <NumberButton buttonStyle='operator' text='-' />
      <NumberButton buttonStyle='operator' text='+' />
      <NumberButton buttonStyle='operator' text='=' />
      {/* <NumberButton buttonStyle= text= /> */}
      
      
      <ActionButton text = '0'/>

      
    </div>
  );
};

export default App;
