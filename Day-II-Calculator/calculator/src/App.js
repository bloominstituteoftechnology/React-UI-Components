
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

      <div className='row-one'>
      <ActionButton id='action-clear' buttonStyle='action-button' text = 'clear'/>
      <NumberButton  buttonStyle='operator' text='÷' />
      </div>

      <div className='row-two'>
      <div className='row-two-numbers'>
      <NumberButton buttonStyle='number' text='7' />
      <NumberButton buttonStyle= 'number' text='8' />
      <NumberButton buttonStyle='number' text='9' />
      </div>
      <NumberButton buttonStyle='operator' text='×'/>
      </div>


      <div className='row-three'>
      <NumberButton buttonStyle='number' text='4' />
      <NumberButton buttonStyle='number' text='5' />
      <NumberButton buttonStyle='number' text='6'/>
      <NumberButton buttonStyle='operator' text='−' />
      </div>


      <div className='row-four'>
      <NumberButton buttonStyle='number' text='1' />
      <NumberButton buttonStyle='number' text='2'/>
      <NumberButton buttonStyle='number' text='3'/>
      <NumberButton buttonStyle='operator' text='+'/>
      </div>
      
      <div className='row-five'>
      <ActionButton id='action-zero' buttonStyle='action-button' text = '0'/>
      <NumberButton buttonStyle='operator' text='=' />
      </div>

      
    </div>
  );
};

export default App;
