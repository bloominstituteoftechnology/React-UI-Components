import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className="MyCalculator">
      <div className="DisplayBox">
        <CalculatorDisplay number="0" />
      </div>
      <div className="Buttons">
        <div className="WhiteButtons">
          <ActionButton className="clearBtn" number="clear" />
          <div className='NumRow'>
            <NumberButton className="btnSmall number" number="7" />
            <NumberButton className="btnSmall number" number="8" />
            <NumberButton className="btnSmall number" number="9" />
          </div>
          <div className='NumRow'>
            <NumberButton className="btnSmall number" number="4" />
            <NumberButton className="btnSmall number" number="5" />
            <NumberButton className="btnSmall number" number="6" />
          </div>
          <div className='NumRow'>
            <NumberButton className="btnSmall number" number="1" />
            <NumberButton className="btnSmall number" number="2" />
            <NumberButton className="btnSmall number" number="3" />
          </div>
          <ActionButton className="zeroBtn" number="0" />
        </div>
        <div className="RedButtons">
          <NumberButton className="btnSmall operators" number="÷" />
          <NumberButton className="btnSmall operators" number="X" />
          <NumberButton className="btnSmall operators" number="-" />
          <NumberButton className="btnSmall operators" number="+" />
          <NumberButton className="btnSmall operators" number="=" />
        </div>      
      </div>  
    </div>  
  );
};

export default App;
