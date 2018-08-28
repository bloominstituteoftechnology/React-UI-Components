import React from 'react';
import './App.css';
import ButtonContainer  from './components/ButtonComponents/ButtonContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {

  const display = {
    state: 0
  };

  return (
    <div className="container">
      <CalculatorDisplay number={display}/>
      <ButtonContainer />
    </div>
  );
};

export default App;
