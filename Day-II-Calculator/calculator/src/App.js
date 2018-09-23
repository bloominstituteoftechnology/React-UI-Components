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
      <ButtonRowFour one="7" two="8" three="9" action="x"/>
      <ButtonRowFour one="4" two="5" three="5" action="-"/>
      <ButtonRowFour one="1" two="2" three="3" action="+"/>
      <ButtonRowTwo name="0" action="=" />
    </div>
  );
};

export default App;