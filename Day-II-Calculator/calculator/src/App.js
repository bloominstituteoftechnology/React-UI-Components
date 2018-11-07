import React from 'react';
import './App.css';
//import ActionButton from './components/ButtonComponents/ActionButton';
//import ButtonComponents from './components/ButtonComponents/NumberButton';
import ClearNumberContainer from './components/ButtonComponents/ClearNumberContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay startingNumber="0"/>
      <ClearNumberContainer />
    
    
    </div>
  );
};

export default App;
