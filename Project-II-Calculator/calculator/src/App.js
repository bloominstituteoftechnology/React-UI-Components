import React from 'react';
import NumbersContainer from './components/NumbersContainer/NumbersContainer'
import ActionsContainer from './components/ActionsContainer/ActionsContainer'
import Display from './components/DisplayComponents/CalculatorDisplay'
import './App.css';

const App = () => {
  return (
    <div className="calculator-container">
      <Display />
      <div className="bottom">
        <NumbersContainer/>
        <ActionsContainer/>
      </div>
    </div>
  );
};

export default App;
