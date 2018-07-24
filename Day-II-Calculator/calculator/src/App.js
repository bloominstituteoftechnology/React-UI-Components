import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='container'>
      <CalculatorDisplay value='0' />
      <ActionButton text='clear' />
      <NumberButton buttonStyle='operator' text='/' />
      <NumberButton buttonStyle='num' text='7' />
      <NumberButton buttonStyle='num' text='8' />
      <NumberButton buttonStyle='num' text='9' />
      <NumberButton buttonStyle='operator' text='X' />
      <NumberButton buttonStyle='num' text='4' />
      <NumberButton buttonStyle='num' text='5' />
      <NumberButton buttonStyle='num' text='6' />
      <NumberButton buttonStyle='operator' text='-' />
      <NumberButton buttonStyle='num' text='1' />
      <NumberButton buttonStyle='num' text='2' />
      <NumberButton buttonStyle='num' text='3' />
      <NumberButton buttonStyle='operator' text='+' />
      <ActionButton text='0' />
      <NumberButton buttonStyle='operator' text='=' />

    </div>
  );
};

export default App;
