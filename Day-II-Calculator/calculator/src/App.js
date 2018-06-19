import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <NumberButton />
     <ActionButton />
    </div>
  );
};

export default App;
