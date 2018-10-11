import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className="container">
      <div className="myCalculator">
        <div className="DisplayBox">
          <CalculatorDisplay number="0" />
        </div>
        <div className="Buttons">
          <div className="WhiteButtons">
            <div className="clearBtn">
              <ActionButton number="clear" />
            </div>
            <div className='NumRow'>
              <NumberButton number="7" />
              <NumberButton number="8" />
              <NumberButton number="9" />
            </div>
            <div className='NumRow'>
              <NumberButton number="4" />
              <NumberButton number="5" />
              <NumberButton number="6" />
            </div>
            <div className='NumRow'>
              <NumberButton number="1" />
              <NumberButton number="2" />
              <NumberButton number="3" />
            </div>
            <div className="zeroBtn">
              <ActionButton number="0" />
            </div>
          </div>
          <div className="RedButtons">
            <NumberButton number="÷" />
            <NumberButton number="x" />
            <NumberButton number="―" />
            <NumberButton number="+" />
            <NumberButton number="=" />
          </div>      
        </div>  
      </div>
    </div>  
  );
};

export default App;
