import React from 'react';
import './App.css';
import CalculatorDisplay from "../src/components/DisplayComponents/CalculatorDisplay";
import Container from "../src/components/Container";

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <Container />
    </div>
  );
};

export default App;
