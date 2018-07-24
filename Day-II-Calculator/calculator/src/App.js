import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import Row1 from './components/Rows/Row1.js';
import Row2 from './components/Rows/Row2.js';
import Row3 from './components/Rows/Row3.js';
import Row4 from './components/Rows/Row4.js';
import Row5 from './components/Rows/Row5.js';

const App = () => {
  return (
    <div className = "container">
      <CalculatorDisplay />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
    </div>
  );
};

export default App;
