import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import CalculatorButtons from './components/ButtonComponents/CalculatorButtons';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay text="0" />
      <CalculatorButtons />
    </div>
  );
};

export default App;
