import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ButtonsContainer from './components/ButtonComponents/ButtonsContainer'

const App = () => {
  return (
    <div className = "container">
  
 
        <CalculatorDisplay result="0"/>

        <ButtonsContainer />
 
    </div>
  );
};

export default App;
