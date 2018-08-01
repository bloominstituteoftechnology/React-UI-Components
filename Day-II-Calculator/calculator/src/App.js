import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='outside-calc-container'>
      <CalculatorDisplay />
      <ButtonContainer>
        <ActionButton text='clear' />
        <NumberButton buttonStyle='red-button' text='/' />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton buttonStyle='white-button' text='7' />
        <NumberButton buttonStyle='white-button' text='8' />
        <NumberButton buttonStyle='white-button' text='9' />
        <NumberButton buttonStyle='red-button' text='*' />
      </ButtonContainer>  
      <ButtonContainer>
        <NumberButton buttonStyle='white-button' text='4' />
        <NumberButton buttonStyle='white-button' text='5' />
        <NumberButton buttonStyle='white-button' text='6' />
        <NumberButton buttonStyle='red-button' text='-' />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton buttonStyle='white-button' text='7' />
        <NumberButton buttonStyle='white-button' text='8' />
        <NumberButton buttonStyle='white-button' text='9' />
        <NumberButton buttonStyle='red-button' text='+' />
      </ButtonContainer>
      <ButtonContainer>
        <ActionButton text='0' />
        <NumberButton buttonStyle='red-button' text='=' />
      </ButtonContainer>
    </div>
  );
};

export default App;