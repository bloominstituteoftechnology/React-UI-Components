import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js';
import NumPad from './components/ButtonComponents/NumPad.js';

const App = () => {
  return (
    <div className="main-app">
      <Display />
      <NumPad />
    </div>
  );
};

export default App;
