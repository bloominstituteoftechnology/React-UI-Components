import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='app'>
      <CalculatorDisplay />
      <ActionButton className='white-btn action-btn'/>
      <NumberButton className='red-btn operator-btn'/>
      <NumberButton className='white-btn digit-btn'/>
      <NumberButton className='white-btn digit-btn'/>
      <NumberButton className='white-btn digit-btn'/>
      <NumberButton className='red-btn operator-btn'/>
      <NumberButton className='white-btn digit-btn'/>
      <NumberButton className='white-btn digit-btn'/>
      <NumberButton className='white-btn digit-btn'/>
      <NumberButton className='red-btn operator-btn'/>
      <NumberButton className='white-btn digit-btn'/>
      <NumberButton className='white-btn digit-btn'/>
      <NumberButton className='white-btn digit-btn'/>
      <NumberButton className='red-btn operator-btn'/>
      <ActionButton className='white-btn action-btn'/>
      <NumberButton className='red-btn operator-btn'/>
    </div>
  );
};

export default App;
