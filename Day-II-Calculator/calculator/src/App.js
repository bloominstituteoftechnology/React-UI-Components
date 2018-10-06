import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js'
import ButtonContainer from './components/ButtonComponents/ButtonContainer.js'

const App = () => {
  return (
    <div className='container'>
      <Display />
      <ButtonContainer/>
    </div>
  );
};

export default App;
