import React from 'react';
import './App.css';
import CalculatorDisplay from '../src/components/DisplayComponents/CalculatorDisplay'
import ActionButton from '../src/components/ButtonComponents/ActionButton'
import NumberButton from '../src/components/ButtonComponents/NumberButton'

const App = () => {
  return (
    <div className="container">
      <div className="top">
        <CalculatorDisplay />
      </div>
      <div className="bottom">
        <NumberButton />
        <ActionButton />
      </div>
    </div>
  );
};

export default App;
