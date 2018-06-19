import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='app-container'>
      <CalculatorDisplay />
      <div className='calculator-left-side'>
        <ActionButton buttonFunction='Clear'/>
        <NumberButton buttonNumber='1'/>
        <NumberButton buttonNumber='2'/>
        <NumberButton buttonNumber='3'/>
        <NumberButton buttonNumber='4'/>
        <NumberButton buttonNumber='5'/>
        <NumberButton buttonNumber='6'/>
        <NumberButton buttonNumber='7'/>
        <NumberButton buttonNumber='8'/>
        <NumberButton buttonNumber='9'/>
        <ActionButton buttonFunction='0'/>
      </div>
      <div className='calculator-right-side'>
        <ActionButton buttonFunction='&divide;'/>
        <ActionButton buttonFunction='&times;'/>
        <ActionButton buttonFunction='&minus;'/>
        <ActionButton buttonFunction='+'/>
        <ActionButton buttonFunction='='/>
      </div>
    </div>
  );
};

export default App;
