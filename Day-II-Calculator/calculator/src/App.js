import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Buttons from './components/ButtonComponents/Buttons';
import './App.css';

const App = () => {
  return (
    <div id="calculator">
      <CalculatorDisplay />
      <Buttons />
    </div>
  );
};

export default App;
