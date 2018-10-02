import React from 'react';
import './App.css';
import ButtonContainer from './components/ButtonComponents/ButtonContainer'
import DisplayScreen from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className= "container">
      <DisplayScreen />
      <ButtonContainer />
    </div>
  );
};

export default App;
