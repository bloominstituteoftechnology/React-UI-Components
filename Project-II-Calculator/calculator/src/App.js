import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ImputButtons from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <ImputButtons />
    </div>
  );
};

export default App;
