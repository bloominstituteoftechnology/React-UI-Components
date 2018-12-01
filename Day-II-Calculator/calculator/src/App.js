import React from 'react';
import './App.css';
import  CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator-container" >
      <CalculatorDisplay />
      <ActionButton text="clear" buttonStyle="btn-action"/>
    </div>
  );
};

export default App;
