import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import OperatorContainer from './components/ButtonComponents/OperatorContainer';

const App = () => {
  return (
    <div className='App'>
      <CalculatorDisplay />
      <ButtonContainer />
      <OperatorContainer />
    </div>
  );
};

export default App;
