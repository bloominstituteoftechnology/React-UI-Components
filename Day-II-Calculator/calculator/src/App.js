import React from 'react';
import './App.css';
import NumberPad from './components/ButtonComponents/NumberPad';
import Operators from './components/ButtonComponents/Operators';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay text="0" />
      <div className="calc-buttons">
        <NumberPad />
        <Operators />
      </div>
    </div>
  );
};

export default App;
