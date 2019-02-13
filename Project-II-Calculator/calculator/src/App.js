import React from 'react';
import './App.css';

import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

import ButtonContainer from './components/ButtonComponents/ButtonContainer';


const App = () => {
  return (
    <div className = "wrapper">
            <CalculatorDisplay />   

            <ButtonContainer >
              <ActionButton style = "wide clear" text = "clear" />
              <ActionButton style = "operation" text = "/" />
            </ButtonContainer>  

            <ButtonContainer >
              <NumberButton style = "num" text = "7" />
              <NumberButton style = "num" text = "8" />
              <NumberButton style = "num" text = "9" />
              <ActionButton style = "operation" text = "X" />
            </ButtonContainer>  

            <ButtonContainer >
              <NumberButton style = "num" text = "4" />
              <NumberButton style = "num" text = "5" />
              <NumberButton style = "num" text = "6" />
              <ActionButton style = "operation" text = "-" />
            </ButtonContainer>  

            <ButtonContainer >
              <NumberButton style = "num" text = "1" />
              <NumberButton style = "num" text = "2" />
              <NumberButton style = "num" text = "3" />
              <ActionButton style = "operation" text = "+" />
            </ButtonContainer>  

            <ButtonContainer >
              <ActionButton style = "wide zero" text = "0" />
              <ActionButton style = "operation" text = "=" />
            </ButtonContainer> 


    </div>
  );
};

export default App;




