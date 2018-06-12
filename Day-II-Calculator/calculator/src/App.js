import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberCollection from './components/ButtonComponents/NumberCollection';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <NumberCollection />
    </div>
  );
};

export default App;