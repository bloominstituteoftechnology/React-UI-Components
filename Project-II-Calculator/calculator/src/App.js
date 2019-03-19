import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className='container'>
      <CalculatorDisplay buttonStyle='disply' text='0' />
      <div className='one'>
        <ActionButton buttonStyle='clear' text='clear' />
        <NumberButton buttonStyle='sign' text='÷' />
      </div>
      <div className='two'>
        <NumberButton buttonStyle='number' text='7' />
        <NumberButton buttonStyle='number' text='8' />
        <NumberButton buttonStyle='number' text='9' />
        <NumberButton buttonStyle='sign' text='×' />
      </div>
      <div className='three'>
        <NumberButton buttonStyle='number' text='4' />
        <NumberButton buttonStyle='number' text='5' />
        <NumberButton buttonStyle='number' text='6' />
        <NumberButton buttonStyle='sign' text='−' />
      </div>
      <div className='four'>
        <NumberButton buttonStyle='number' text='1' />
        <NumberButton buttonStyle='number' text='2' />
        <NumberButton buttonStyle='number' text='3' />
        <NumberButton buttonStyle='sign' text='+' />
      </div>
      <div className='five'>
        <NumberButton buttonStyle='zero' text='0' />
        <NumberButton buttonStyle='sign' text='=' />
      </div>
    </div>
  );
};

export default App;
