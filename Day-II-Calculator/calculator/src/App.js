import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calc-wrapper">
     <CalculatorDisplay />
     <ButtonContainer className="clear-button">
       <ActionButton className="lg-button-text" text="clear" />
       <NumberButton className="red-button" text="/" />
     </ButtonContainer>
     <ButtonContainer>
       <NumberButton className="num-button" text="7" />
       <NumberButton className="num-button" text="8" />
       <NumberButton className="num-button" text="9" />
       <NumberButton className="red-button" text="X" />
     </ButtonContainer>
     <ButtonContainer>
       <NumberButton className="num-button" text="4" />
       <NumberButton className="num-button" text="5" />
       <NumberButton className="num-button" text="6" />
       <NumberButton className="red-button" text="-" />
     </ButtonContainer>
     <ButtonContainer>
       <NumberButton className="num-button" text="1" />
       <NumberButton className="num-button" text="2" />
       <NumberButton className="num-button" text="3" />
       <NumberButton className="red-button" text="+" />
     </ButtonContainer>
     <ButtonContainer>
       <ActionButton className="lg-button-text" text="0" />
       <NumberButton className="red-button" text="=" />
     </ButtonContainer>
    </div>
  );
};

export default App;
