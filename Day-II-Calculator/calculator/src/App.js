import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className="calculator-container">
      {/* <div className="calculator-display-block"> */}
        <CalculatorDisplay />
      {/* </div> */}
    </div>
  );
};

export default App;
