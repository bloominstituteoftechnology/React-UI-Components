import React from 'react';
import './App.css';
import CalculatorDispaly from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='container'>
      <h3>Welcome to React Calculator</h3>
      <CalculatorDispaly />
    </div>
  );
};

export default App;
