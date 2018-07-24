import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay />
      <ButtonContainer>
          <ActionButton className="three-q-text" text="clear" />
          <NumberButton text="/" buttonStyle="red-btn"/>
      </ButtonContainer>
      <ButtonContainer>
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <NumberButton text="x" buttonStyle="red-btn"/>
      </ButtonContainer>
      <ButtonContainer>
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <NumberButton text="-" buttonStyle="red-btn"/>
      </ButtonContainer>
      <ButtonContainer>
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <NumberButton text="+" buttonStyle="red-btn"/>
      </ButtonContainer>
      <ButtonContainer>
          <ActionButton className="three-q-text" text="0"/>
          <NumberButton text="=" buttonStyle="red-btn"/>
      </ButtonContainer>
    </div>
  );
};

export default App;
