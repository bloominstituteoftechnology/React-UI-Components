import React from 'react';
import './App.css';
import NumberKeys from "./components/ButtonComponents/NumberKeys"
import ActionKeys from "./components/ButtonComponents/ActionKeys"
import Display from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className='calculator'>
      <Display />
      <NumberKeys />        
      <ActionKeys />
    </div>
  );
};

export default App;
