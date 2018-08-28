import React from 'react';
import './App.css';
import ButtonsContainer from './components/ButtonComponents/ButtonsContainer';

const App = () => {
  return (
    <div>
      <ButtonsContainer />
    </div>
  );
};

export default App;

/* 
App
  CalculatorDisplay
  ButtonsContainer
    LongButton_Clear
    NumberButtonContainer
      NumberButton_1
      NumberButton_2
      NumberButton_3
      NumberButton_4
      NumberButton_5
      NumberButton_6
      NumberButton_7
      NumberButton_8
      NumberButton_9
      LongButton_0
    ActionButtonContainer
      ActionButton_division
      ActionButton_multiplication
      ActionButton_subtraction
      ActionButton_addition
      ActionButton_equals
*/