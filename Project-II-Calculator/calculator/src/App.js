import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay num="0" />
      <div className="num-wrap">
        <div className="row">
          <ActionButton buttonStyle="full-btn" type="clear"  />
          <ActionButton buttonStyle="operator" type="÷" />
        </div>
        <div className="num-pad">
          <NumberButton num="7" />
          <NumberButton num="8" />
          <NumberButton num="9" />
          <ActionButton buttonStyle="operator" type="×" />

          <NumberButton num="4" />
          <NumberButton num="5" />
          <NumberButton num="6" />
          <ActionButton buttonStyle="operator" type="-" />

          <NumberButton num="1" />
          <NumberButton num="2" />
          <NumberButton num="3" />
          <ActionButton buttonStyle="operator" type="+" />
          
        </div>
        <div className="row">
          <NumberButton buttonStyle="full-btn" num="0"  />
          <ActionButton buttonStyle="operator" type="=" />
        </div>  
      </div>
    </div>
  );
};

export default App;
