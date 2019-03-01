import React from 'react';
import './App.css';
import './components/DisplayComponents/CalculatorDisplay';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='container'>
      <CalculatorDisplay />
    </div>
  );
};

export default App;
