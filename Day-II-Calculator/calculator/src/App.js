import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

import './App.css';

const App = () => {
  return (
    <div className="Container">
      <CalculatorDisplay text="0"/>
    </div>
  );
};

export default App;
