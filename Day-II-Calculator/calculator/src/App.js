import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render() {
    return (
      <div className="calculator-wrapper">
        <CalculatorDisplay />
        <ButtonContainer className="clear-button">
          <ActionButton className="three-text" text="clear" />
          <NumberButton bgColor="red-button" text="/" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="num-button" text="7" />
          <NumberButton bgColor="num-button" text="8" />
          <NumberButton bgColor="num-button" text="9" />
          <NumberButton bgColor="red-button" text="X" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="num-button" text="4" />
          <NumberButton bgColor="num-button" text="5" />
          <NumberButton bgColor="num-button" text="6" />
          <NumberButton bgColor="red-button" text="-" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="num-button" text="1" />
          <NumberButton bgColor="num-button" text="2" />
          <NumberButton bgColor="num-button" text="3" />
          <NumberButton bgColor="red-button" text="+" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="three-text" text="0" />
          <NumberButton bgColor="red-button" text="=" />
        </ButtonContainer>
      </div>
    );
  }
}

export default App;
