import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

const App = () => {
  return (
    <div className='App'>
      <Display />
      <ButtonContainer />
    </div>
  );
};

export default App;
