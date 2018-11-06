import React from 'react';
import './App.css';
import ButtonsContainer from './components/ButtonComponents/ButtonsContainer';
import OperatorsContainer from './components/ButtonComponents/OperatorsContainer';
import  CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <React.Fragment>
      <CalculatorDisplay />
      <div class="calc-wrapper">
        <ButtonsContainer />
        <OperatorsContainer />
      </div>
    </React.Fragment>

  );
};

export default App;
