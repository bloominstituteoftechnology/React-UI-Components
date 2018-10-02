import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {

  const wideButton = {
    width: '339px', 
    color: 'black', 
    background: 'white'
  };

  return (
    <div className='calculator-container'>
      <CalculatorDisplay />
      <div className='calc-row'>
        <ActionButton text={'clear'} style={wideButton}/>
        <ActionButton text={'÷'}/>
      </div>
      <div className='calc-row'>
        <NumberButton text={7}/>
        <NumberButton text={8}/>
        <NumberButton text={9}/>
        <ActionButton text={'X'}/>
      </div>
      <div className='calc-row'>
        <NumberButton text={4}/>
        <NumberButton text={5}/>
        <NumberButton text={6}/>
        <ActionButton text={'-'}/>
      </div>
      <div className='calc-row'>
        <NumberButton text={1}/>
        <NumberButton text={2}/>
        <NumberButton text={3}/>
        <ActionButton text={'+'}/>
      </div>
      <div className='calc-row'>
        <ActionButton text={0} style={wideButton}/>
        <ActionButton text={'='}/>
      </div>
    </div>
  );
};

export default App;
