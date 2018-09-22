import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'

const App = () => {
  return (
    <div>
        <CalculatorDisplay value="0" />
        <ActionButton value="Clear"/>
    </div>
  );
};

export default App;
