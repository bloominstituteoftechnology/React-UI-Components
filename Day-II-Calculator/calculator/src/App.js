import React from 'react';
import './App.css';
import ButtonRowTwo from './components/ButtonComponents/ButtonRowTwo.js';
import ButtonRowFour from './components/ButtonComponents/ButtonRowFour.js';

const CalculatorDisplay = () => {
  return(<div className="cd-main">
    <p>1234567890</p>
  </div>);
};

const App = () => {
  return (
    <div id="root">
      <CalculatorDisplay />
      <ButtonRowTwo name="hey there" />
      <ButtonRowFour />
      <ButtonRowFour />
      <ButtonRowFour />
    </div>
  );
};

export default App;
