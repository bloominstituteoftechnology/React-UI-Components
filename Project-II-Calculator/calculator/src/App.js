import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'

const App = () => {
  return (
    <div className = "container">

    <div>
    <CalculatorDisplay displayStyle = "display" text = "0" />
    </div>

    <div className = "row">
    <ActionButton buttonstyle = "clear" text = "clear"/>
    <ActionButton buttonstyle = "operator" text = "÷"/>
    </div>
    <div className = " row ">
    <NumberButton buttonstyle ="number" text = "7"/>
    <NumberButton buttonstyle ="number" text = "8"/>
    <NumberButton buttonstyle ="number" text = "9"/>
    <ActionButton buttonstyle = "operator" text = "X"/>
    </div>
    <div className = " row ">
    <NumberButton buttonstyle ="number" text = "4"/>
    <NumberButton buttonstyle ="number" text = "5"/>
    <NumberButton buttonstyle ="number" text = "6"/>
    <ActionButton buttonstyle = "operator" text = "-"/>
    </div>
    <div className = " row ">
    <NumberButton buttonstyle ="number" text = "1"/>
    <NumberButton buttonstyle ="number" text = "2"/>
    <NumberButton buttonstyle ="number" text = "3"/>
    <ActionButton buttonstyle = "operator" text = "+"/>
    </div>
    <div className = " row ">
    <NumberButton buttonstyle = "zero" text = "0" />
    <ActionButton buttonstyle = "operator" text = "="/>
    </div>
    </div>


    
  );
};

export default App;
