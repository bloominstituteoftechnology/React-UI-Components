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
        <NumberButton buttonNumber='1' buttonStyle='number-button-styles'/>
        <NumberButton buttonNumber='2' buttonStyle='number-button-styles'/>
        <NumberButton buttonNumber='3' buttonStyle='number-button-styles'/>
        <NumberButton buttonNumber='4' buttonStyle='number-button-styles'/>
        <NumberButton buttonNumber='5' buttonStyle='number-button-styles'/>
        <NumberButton buttonNumber='6' buttonStyle='number-button-styles'/>
        <NumberButton buttonNumber='7' buttonStyle='number-button-styles'/>
        <NumberButton buttonNumber='8' buttonStyle='number-button-styles'/>
        <NumberButton buttonNumber='9' buttonStyle='number-button-styles'/>
        <ActionButton buttonFunction='0'/>
      </div>
      <div className='calculator-right-side'>
        <ActionButton buttonFunction='&divide;' buttonStyle='action-button-styles'/>
        <ActionButton buttonFunction='&times;' buttonStyle='action-button-styles'/>
        <ActionButton buttonFunction='&minus;' buttonStyle='action-button-styles'/>
        <ActionButton buttonFunction='+' buttonStyle='action-button-styles'/>
        <ActionButton buttonFunction='=' buttonStyle='action-button-styles'/>
      </div>
    </div>
  );
};

export default App;
