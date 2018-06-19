import React from 'react';
import './App.css';
import OperationGrid from './components/ButtonComponents/OperationGrid';
import InputGrid from './components/ButtonComponents/InputGrid';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
const App = () => {
  return (
    <div className='app-wrapper'>
      <CalculatorDisplay />
      <div className="buttons">
        <InputGrid />
        <OperationGrid />
      </div>
    </div>
  );
};

export default App;
