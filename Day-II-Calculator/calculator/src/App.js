import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay />
      
      <div className="inner-container">
        <div className="white-button">
          <ActionButton extraStyles="rectangular-btn" text="clear" />
        
          <NumberButton text="1" extraStyles="square-button" />
          <NumberButton text="2" extraStyles="square-button" />
          <NumberButton text="3" extraStyles="square-button" />
          <NumberButton text="4" extraStyles="square-button" />
          <NumberButton text="5" extraStyles="square-button" />
          <NumberButton text="6" extraStyles="square-button" />
          <NumberButton text="7" extraStyles="square-button" />
          <NumberButton text="8" extraStyles="square-button" />
          <NumberButton text="9" extraStyles="square-button" />

          <ActionButton extraStyles="rectangular-btn" text="0" />
        </div>

        <div className="red-button">
          <NumberButton text="&divide;" extraStyles="square-button-red" />
          <NumberButton text="&times;" extraStyles="square-button-red" />
          <NumberButton text="&ndash;" extraStyles="square-button-red" />
          <NumberButton text="+" extraStyles="square-button-red" />
          <NumberButton text="=" extraStyles="square-button-red" />
        </div>
      </div>

    </div>
  );
};

export default App;

