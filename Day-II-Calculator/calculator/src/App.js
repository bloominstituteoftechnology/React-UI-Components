import React from 'react';
import './App.css';
import ButtonsContainer from './components/ButtonComponents/ButtonsContainer';
import OperatorsContainer from './components/ButtonComponents/OperatorsContainer';

const App = () => {
  return (
    <div class="calc-wrapper">
      <ButtonsContainer />
      <OperatorsContainer />
    </div>
  );
};

export default App;
