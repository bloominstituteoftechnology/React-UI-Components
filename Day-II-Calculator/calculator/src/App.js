import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render() {
    return (
      <div className="calculator-container">
        <CalculatorDisplay />
        <ButtonContainer className="clear-button">
          <ActionButton className="wide-button" text="clear" />
          <NumberButton buttonColor="operand-button" text="/" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton buttonColor="number-button" text="7" />
          <NumberButton buttonColor="number-button" text="8" />
          <NumberButton buttonColor="number-button" text="9" />
          <NumberButton buttonColor="operand-button" text="x" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton buttonColor="number-button" text="4" />
          <NumberButton buttonColor="number-button" text="5" />
          <NumberButton buttonColor="number-button" text="6" />
          <NumberButton buttonColor="operand-button" text="-" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton buttonColor="number-button" text="1" />
          <NumberButton buttonColor="number-button" text="2" />
          <NumberButton buttonColor="nunumberm-button" text="3" />
          <NumberButton buttonColor="operand-button" text="+" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="wide-button" text="0" />
          <NumberButton buttonColor="operand-button" text="=" />
        </ButtonContainer>
      </div> 
    );
  }
}

export default App;