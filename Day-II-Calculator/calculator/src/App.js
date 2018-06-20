import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import FunctionButton from './components/ButtonComponents/FunctionButton';

class App extends React.Component {
  render() {
   return (
    <div className="calculator-container">
    <CalculatorDisplay />
    <ButtonContainer className="clear-button">
     <ActionButton className="text" text="clear" />
     <NumberButton color="function-button" text="÷" />
     </ButtonContainer>
     <ButtonContainer>
       <NumberButton color="number-button" text="7" />
       <NumberButton color="number-button" text="8" />
       <NumberButton color="number-button" text="9" />
       <NumberButton color="function-button" text="x" />
       </ButtonContainer>
       <ButtonContainer>
       <NumberButton color="number-button" text="4" />
       <NumberButton color="number-button" text="5" />
       <NumberButton color="number-button" text="6" />
       <NumberButton color="function-button" text="-" />
       </ButtonContainer>
       <ButtonContainer>
       <NumberButton color="number-button" text="1" />
       <NumberButton color="number-button" text="2" />
       <NumberButton color="number-button" text="3" />
       <NumberButton color="function-button" text="+" />
       </ButtonContainer>
       <ButtonContainer>
       <ActionButton color="number-button" text="0" />
       <NumberButton color="function-button" text="=" />
       </ButtonContainer>

    </div>
    );
  }
}

export default App;
