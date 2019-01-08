import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonPad from './components/ButtonComponents/ButtonPad';



const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay/>
      <ButtonPad/>
    </div>
  );
};

export default App;
