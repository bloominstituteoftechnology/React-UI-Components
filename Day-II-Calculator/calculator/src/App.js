import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ButtonRowTwo from './components/ButtonComponents/ButtonRowTwo.js';
import ButtonRowFour from './components/ButtonComponents/ButtonRowFour.js';

const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <ButtonRowTwo name="clear" action="&divide;"/>
      <ButtonRowFour />
      <ButtonRowFour />
      <ButtonRowFour />
      <ButtonRowTwo name="hey there" />
    </div>
  );
};

export default App;