import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ContainerButtons from './components/ButtonComponents/ContainerButtons';
const App = () => {
  return (
    <div>
    <CalculatorDisplay currentNumber={0} />
    <ContainerButtons />
    </div>
  );
};

export default App;
