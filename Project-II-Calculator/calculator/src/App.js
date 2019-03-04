import React from 'react';
import './App.css';

import './components/DisplayComponents/CalculatorDisplay'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className='calc-container'>
    <div className="row">
        <CalculatorDisplay />
      </div>

    <div className="row">
      <ActionButton input='clear' className='large-button'/>
      <NumberButton input='/' className='small-button'/>
    </div>

    <div className="row">
      <NumberButton className='number-button' input='7' />
      <NumberButton className='number-button' input='8'/>
      <NumberButton className='number-button' input='9'/>
      <NumberButton className='small-button' input='X'/>
    </div>

    <div className="row">
    <NumberButton className='number-button' input='4' />
      <NumberButton className='number-button' input='5'/>
      <NumberButton className='number-button' input='6'/>
      <NumberButton className='small-button' input='-'/>
    </div>

     <div className="row">
     <NumberButton className='number-button' input='1' />
      <NumberButton className='number-button' input='2'/>
      <NumberButton className='number-button' input='3'/>
      <NumberButton className='small-button' input='+'/>
    </div>
    <div className="row">
      <ActionButton input='0' className='large-button'/>
      <NumberButton className='small-button' input='='/>
     
    </div>

    </div>
  );
};

export default App;
