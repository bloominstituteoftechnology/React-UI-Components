import React from 'react';
import './App.css';
import CalDisplay from '../src/components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from '../src/components/ButtonComponents/Button-Container';

const App = () => {
  return (
    <div className="container">
      <CalDisplay />
      <ButtonContainer />
    </div>
  );
};

export default App;
