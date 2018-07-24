import React from 'react';
import './App.css';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import Display from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className = "app-container">
      <Display />
      <ButtonContainer />
    </div>
  );
};

export default App;
