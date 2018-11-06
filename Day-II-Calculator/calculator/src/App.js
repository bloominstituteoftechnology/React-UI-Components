import React from 'react';
import './App.css';
import './components/ButtonComponents/NumberButton'
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div className="app">
      <div className="calc">
        <CalculatorDisplay num="0" />
      
        <div className="button-container">
          <div className="row">
            <NumberButton text="&#247;" buttonStyle="operation"/>
            <ActionButton text="clear" buttonStyle="number wide-button clear"/>
          </div>
          <div className="row">
            <NumberButton text="&times;" buttonStyle="operation"/>
            <NumberButton text="9" buttonStyle="number"/>
            <NumberButton text="8" buttonStyle="number"/>
            <NumberButton text="7" buttonStyle="number"/>
          </div>
          <div className="row">
            <NumberButton text="&mdash;" buttonStyle="operation"/>
            <NumberButton text="6" buttonStyle="number"/>
            <NumberButton text="5" buttonStyle="number"/>
            <NumberButton text="4" buttonStyle="number"/>
          </div>
          <div className="row">
            <NumberButton text="+" buttonStyle="operation"/>
            <NumberButton text="3" buttonStyle="number"/>
            <NumberButton text="2" buttonStyle="number"/>
            <NumberButton text="1" buttonStyle="number"/>
          </div>
          <div className="row">
            <NumberButton text="=" buttonStyle="operation"/>
            <ActionButton text="0" buttonStyle="number wide-button"/>
            
          </div>
        </div>
      </div>
    </div>  
  );
};

export default App;
