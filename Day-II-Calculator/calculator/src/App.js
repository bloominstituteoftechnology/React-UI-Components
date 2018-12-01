import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div class="container">
      <CalculatorDisplay 
        number={0}
      />
    </div>
  );
};

export default App;
