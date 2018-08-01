import React from 'react';
import './App.css';

const App = () => (
    <div className='outside-calc-container'>
      <CalculatorDisplay />
      <ButtonContainer className='clear-row'>
        <ActionButton className='bar-button' text='clear' />
        <NumberButton background='red-button' text='/' />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton background='white-button' text='7' />
        <NumberButton background='white-button' text='8' />
        <NumberButton background='white-button' text='9' />
        <NumberButton background='red-button' text='*' />
      </ButtonContainer>  
      <ButtonContainer>
        <NumberButton background='white-button' text='6' />
        <NumberButton background='white-button' text='5' />
        <NumberButton background='white-button' text='4' />
        <NumberButton background='red-button' text='-' />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton background='white-button' text='3' />
        <NumberButton background='white-button' text='2' />
        <NumberButton background='white-button' text='1' />
        <NumberButton background='red-button' text='+' />
      </ButtonContainer>
      <ButtonContainer>
        <ActionButton className='bar-button' text='0' />
        <NumberButton background='red-button' text='=' />
      </ButtonContainer>
    </div>
  );


export default App;