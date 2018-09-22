import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButtonsContainer from './components/ButtonComponents/NumberButtonContainer';
import ActionButtonsContainer from './components/ButtonComponents/ActionButtonContainer';

const App = () => {
  return (
    <div className="cta">
      <Display />
      <div className="NumberAndActionContainer">
        <NumberButtonsContainer />
        <ActionButtonsContainer />
      </div>
    </div>
  )
}

export default App;
