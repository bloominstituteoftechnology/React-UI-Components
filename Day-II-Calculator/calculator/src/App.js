import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'

const App = () => {
  return (
    <div>
     <CalculatorDisplay buttonStyle="display-style" text="" />
    </div>
  );
};

export default App;
