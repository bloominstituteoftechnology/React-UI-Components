import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <ActionButton text="clear" />
      <NumberButton text="÷" bgColor="maroon" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <NumberButton text="x" bgColor="maroon" />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <NumberButton text="-" bgColor="maroon" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <NumberButton text="+" bgColor="maroon" />
      <ActionButton text="0" />
      <NumberButton text="=" bgColor="maroon" />
    </div>
  );
};

export default App;
