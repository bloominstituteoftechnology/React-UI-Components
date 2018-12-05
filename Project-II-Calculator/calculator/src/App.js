import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import './App.css';

const App = () => {
  return (
    <div>
      div
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

      <NumberButton lengthStyle="longButtonStyle" text="0" /> 
      
      <div className="operations">
        <ActionButton lengthStyle="squareButtonStyle" func="operation" text ="÷"/>
        <ActionButton lengthStyle="squareButtonStyle" func="operation" text ="x"/>
        <ActionButton lengthStyle="squareButtonStyle" func="operation" text ="-"/>
        <ActionButton lengthStyle="squareButtonStyle" func="operation" text ="+"/>
        <ActionButton lengthStyle="squareButtonStyle" func="operation" text ="="/>
      </div>
      
    </div>
  );
};

export default App;
