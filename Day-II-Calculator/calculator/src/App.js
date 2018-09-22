import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='container'>
      <div className='top'>
      <CalculatorDisplay/>
      <ActionButton bgColor='white' text='clear'/>
      <NumberButton bgColor='red' text='/'/>
      </div>
      <div className='top-nums'>
      <NumberButton bgColor='white' text='7'/>
      <NumberButton bgColor='white' text='8'/>
      <NumberButton bgColor='white' text='9'/>
      <NumberButton bgColor='red' text='x'/>
      </div>
      <div className='mid-nums'>
      <NumberButton bgColor='white' text='4'/>
      <NumberButton bgColor='white' text='5'/>
      <NumberButton bgColor='white' text='6'/>
      <NumberButton bgColor='red' text='-'/>
      </div>
      <div className='bot-nums'>
      <NumberButton bgColor='white' text='1'/>
      <NumberButton bgColor='white' text='2'/>
      <NumberButton bgColor='white' text='3'/>
      <NumberButton bgColor='red' text='+'/>
      </div>
      <div className='bottom'>
      <ActionButton bgColor='white' text='0'/>
      <NumberButton bgColor='red' text='='/>
      </div>
    </div>
  );
};

export default App;
