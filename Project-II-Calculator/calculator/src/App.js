import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import './App.css';

const App = () => {
  return (
    <div className="returnDiv">
     
      <CalculatorDisplay text="0"/> 

      <div className="numActAndOpBlock">

        <div className ="numbersAndActionButtons">
        
          <ActionButton lengthStyle="longButtonStyle" text="clear"/>
        
            <div className="numberButton">
              <NumberButton text="1"/>
              <NumberButton text="2"/>
              <NumberButton text="3"/>
              <NumberButton text="4"/>
              <NumberButton text="5"/>
              <NumberButton text="6"/>
              <NumberButton text="7"/>
              <NumberButton text="8"/>
              <NumberButton text="9"/>
            </div>  

            <ActionButton lengthStyle="longButtonStyle" text="0"/>
        </div>

        <div className="operations">
            <NumberButton text="÷" functionality="operationButtonStyle" />
            <NumberButton text="x" functionality="operationButtonStyle"/>
            <NumberButton text="-" functionality="operationButtonStyle"/>
            <NumberButton text="+" functionality="operationButtonStyle"/>
            <NumberButton text="=" functionality="operationButtonStyle"/>
        </div>
      </div>
      
    </div>
      
  );
};

export default App;
