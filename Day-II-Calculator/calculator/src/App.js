import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay />
      <div className='number-action-container'>
        <div className='row'>
          <ActionButton buttonStyle='button clear-btn' text='clear' />
          <NumberButton buttonStyle='button maroon' text='&divide;' />
        </div>
        <div className='row'>
          <NumberButton buttonStyle='button' text='7'/>
          <NumberButton buttonStyle='button' text='8'/>
          <NumberButton buttonStyle='button' text='9'/>
          <NumberButton buttonStyle='button maroon' text='&times;'/>
        </div>
        <div className='row'>
          <NumberButton buttonStyle='button' text='4'/>
          <NumberButton buttonStyle='button' text='5'/>
          <NumberButton buttonStyle='button' text='6'/>
          <NumberButton buttonStyle='button maroon' text='&mdash;'/>
        </div>
        <div className='row'>
          <NumberButton buttonStyle='button' text='1'/>
          <NumberButton buttonStyle='button' text='2'/>
          <NumberButton buttonStyle='button' text='3'/>
          <NumberButton buttonStyle='button maroon' text='+'/>
        </div>
        <div className='row'>
          <ActionButton buttonStyle='button clear-btn' text='0'/>
          <NumberButton buttonStyle='button maroon' text='='/>
        </div>
      </div>
    </div>
  );
};

export default App;
