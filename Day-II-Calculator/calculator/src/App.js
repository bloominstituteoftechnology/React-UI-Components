import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='calculator-container'>
      <CalculatorDisplay />
      <div className='calc-row'>
        <ActionButton type={'clear'}/>
        <ActionButton type={'÷'}/>
      </div>
      <div className='calc-row'>
        <NumberButton value={7}/>
        <NumberButton value={8}/>
        <NumberButton value={9}/>
        <ActionButton type={'X'}/>
      </div>
      <div className='calc-row'>
        <NumberButton value={4}/>
        <NumberButton value={5}/>
        <NumberButton value={6}/>
        <ActionButton type={'-'}/>
      </div>
      <div className='calc-row'>
        <NumberButton value={1}/>
        <NumberButton value={2}/>
        <NumberButton value={3}/>
        <ActionButton type={'+'}/>
      </div>
      <div className='calc-row'>
        <NumberButton value={0}/>
        <ActionButton type={'='}/>
      </div>

    </div>
  );
};

export default App;
