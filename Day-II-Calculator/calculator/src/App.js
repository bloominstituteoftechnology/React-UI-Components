import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'; 

const App = () => {
  return (
    <div className="calculator-container">
      <div className="display">
        <CalculatorDisplay />
      </div>
      <div className="button-body">
        <div className="number-body">

        </div>
        <div className="operator-body">
          
        </div>
      </div>
    </div>
  );
};

export default App;
