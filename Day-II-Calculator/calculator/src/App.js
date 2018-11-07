import React from 'react';
import './App.css';
import ButtonBody from './components/ButtonComponents/buttonbody';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="container">
      <CalcDisplay />
      <ButtonBody />
    </div>
  );
};

export default App;
