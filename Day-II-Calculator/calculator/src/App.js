import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import OperatorButton from './components/ButtonComponents/OperatorButton';
import ClearButton from './components/ButtonComponents/ClearButton';


const App = () => {
  return (
    <div className="calculator__container">
      <Display className="calculator__display" text = "0"/>
      <div className="calculator__number--buttons">
        <ClearButton buttonStyle="calculator__clear"text="clear"/>
        <NumberButton buttonStyle="calculator__number" text="9"/>
        <NumberButton buttonStyle="calculator__number" text="8"/>
        <NumberButton buttonStyle="calculator__number" text="7"/>
        <NumberButton buttonStyle="calculator__number" text="6"/>
        <NumberButton buttonStyle="calculator__number" text="5"/>
        <NumberButton buttonStyle="calculator__number" text="4"/>
        <NumberButton buttonStyle="calculator__number" text="3"/>
        <NumberButton buttonStyle="calculator__number" text="2"/>
        <NumberButton buttonStyle="calculator__number" text="1"/>
        <NumberButton buttonStyle="calculator__number" text="0"/>
      </div>
      <div className="calculator__operator--buttons">
        <OperatorButton buttonStyle="calculator__operator" text="÷"/>
        <OperatorButton buttonStyle="calculator__operator" text="x"/>
        <OperatorButton buttonStyle="calculator__operator" text="-"/>
        <OperatorButton buttonStyle="calculator__operator" text="+"/>
        <OperatorButton buttonStyle="calculator__operator" text="="/>        
      </div>
    </div>
  );
};

export default App;
