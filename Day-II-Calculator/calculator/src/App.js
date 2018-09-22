import React from 'react';
import './App.css';
import ActionContainer from './components/ButtonComponents/ActionContainer';
import NumberContainer from './components/ButtonComponents/NumberContainer';
import Display from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div class='calculator'>
      <Display />
      <ActionContainer />
      <NumberContainer />
    </div>
  );
};

export default App;
