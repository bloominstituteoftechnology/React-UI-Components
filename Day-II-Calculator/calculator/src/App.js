import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className="app-wrapper">
      <div className="calc-wrapper">
        <CalculatorDisplay total="0"/>
        <div className="numbersButtonsDiv">
          
          <NumberButton numberLabel="9" />
          <NumberButton numberLabel="8" />
          <NumberButton numberLabel="7" />
          <NumberButton numberLabel="6" />
          <NumberButton numberLabel="5" />
          <NumberButton numberLabel="4" />
          <NumberButton numberLabel="3" />
          <NumberButton numberLabel="2" />
          <NumberButton numberLabel="1" />
          <NumberButton numberLabel="0" extraStyles="zeroNumberStyles" />
        </div>
      </div>
    </div>
  );
};

export default App;
