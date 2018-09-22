import React from 'react';
import './App.css';
import ButtonRowTwo from './components/ButtonComponents/ButtonRowTwo.js';

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
    </div>
  );
};

export default App;
