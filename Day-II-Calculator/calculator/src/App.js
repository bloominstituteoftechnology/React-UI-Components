import React from 'react';
import './App.css';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import FunctionButton from './components/ButtonComponents/FunctionButton';
import MainButtons from './components/ButtonComponents/MainButtons';


const App = () => {
  return (
    <div>
      <CalcDisplay />
      <MainButtons />
      <FunctionButton />
    </div>
  );
};

export default App;
