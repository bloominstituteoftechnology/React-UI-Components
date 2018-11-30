import React from 'react';
import './App.css';

import CalculatorContainer from './components/CalculatorContainer/CalculatorContainer.js';

const App = () => {
  return (
    <div className="app">
      <h3>Welcome to React Calculator</h3>
      <CalculatorContainer />
    </div>
  );
};

export default App;
