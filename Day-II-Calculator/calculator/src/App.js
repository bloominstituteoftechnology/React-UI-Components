import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='calculator'>
      <CalculatorDisplay display='0'/>
      <ActionButton btn='clear' />
      <NumberButton className='operator' btn='÷' />
      <NumberButton btn='7' />
      <NumberButton btn='8' />
      <NumberButton btn='9' />
      <NumberButton className='operator' btn='x' />
      <NumberButton btn='4' />
      <NumberButton btn='5' />
      <NumberButton btn='6' />
      <NumberButton className='operator' btn='-' />
      <NumberButton btn='1' />
      <NumberButton btn='2' />
      <NumberButton btn='3' />
      <NumberButton className='operator' btn='+' />
      <ActionButton btn='0' />
      <NumberButton className='operator' btn='=' />
    </div>
  );
};

export default App;
