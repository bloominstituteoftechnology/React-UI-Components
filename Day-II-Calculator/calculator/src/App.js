import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <CalculatorDisplay text='0' />
      <NumberButton className='number' text='2' />
      <ActionButton text='clear' />
    </div>
  );
};

export default App;
