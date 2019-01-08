import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay display="0" />
    </div>
  );
};

export default App;
