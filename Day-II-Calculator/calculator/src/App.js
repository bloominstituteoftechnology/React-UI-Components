import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import Buttons from './components/ButtonComponents/Buttons';

const App = () => {
  return (
    <div className = 'app'>
      <Display/>
      <Buttons/>
    </div>
  );
};

export default App;
