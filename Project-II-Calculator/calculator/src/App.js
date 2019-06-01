import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

const App = () => {
  return (
    <div className='App'>
      <CalculatorDisplay />
      <ButtonContainer />
    </div>
  );
};

export default App;
