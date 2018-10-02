import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <NumberButton />
      
    </div>
  );
};

export default App;
