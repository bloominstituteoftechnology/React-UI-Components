import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import ButtonBox from './components/ButtonComponents/ButtonBox';
import NumberButton from './components/ButtonComponents/NumberButton';




const App = () => {
  return (
    <div className="calculator-container">
        <CalculatorDisplay />
        <div className="wide-button">
          <ActionButton className="three-boxes" text="clear" />
          <NumberButton buttonStyle="red-button" text="/" />
        </div>  
        <ButtonBox>
          <NumberButton buttonStyle="num-button" text="7" />
          <NumberButton buttonStyle="num-button" text="8" />
          <NumberButton buttonStyle="num-button" text="9" />
          <NumberButton buttonStyle="red-button" text="X" />   
        </ButtonBox>
        <ButtonBox>
          <NumberButton buttonStyle="num-button" text="4" />
          <NumberButton buttonStyle="num-button" text="5" />
          <NumberButton buttonStyle="num-button" text="6" />
          <NumberButton buttonStyle="red-button" text="-" />
        </ButtonBox>
        <ButtonBox>
          <NumberButton buttonStyle="num-button" text="1" />
          <NumberButton buttonStyle="num-button" text="2" />
          <NumberButton buttonStyle="num-button" text="3" />
          <NumberButton buttonStyle="red-button" text="+" />
        </ButtonBox>
        <div className="wide-button">
          <ActionButton className="three-boxes" text="0" />
          <NumberButton buttonStyle="red-button" text="=" /> 
        </div>
        
    </div>
  );
};

export default App;
