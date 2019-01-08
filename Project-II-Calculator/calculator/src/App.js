import React from 'react';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

import './App.css';

const App = () => {
  return (
    <div className='container'>
      <CalculatorDisplay />
      <ButtonContainer />
    </div>
  );
};

export default App;
