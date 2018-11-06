import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import InputContainer from './components/ButtonComponents/InputContainer.js';
const App = () => {
  return (
    <div className='app'>
      <CalculatorDisplay />
      <InputContainer />
    </div>
  );
};

export default App;
