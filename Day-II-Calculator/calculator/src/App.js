import React from 'react';
import './App.css';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div>
      <CalcDisplay />
      <ActionButton />
      <NumButton />
    </div>
  );
};

export default App;
