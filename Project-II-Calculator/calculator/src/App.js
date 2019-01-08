import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import './App.css';




const App = () => {
  return (
    <div className = 'container'>
    <CalculatorDisplay />
    <ActionButton buttonStyles='action' text='Clear'/>
    <NumberButton buttonStyles="symbol" text="÷"/>
    <NumberButton buttonStyles="regular" text="7"/>
    <NumberButton buttonStyles="regular" text="8"/>
    <NumberButton buttonStyles="regular" text="9"/>
    <NumberButton buttonStyles="symbol" text="x"/>
    <NumberButton buttonStyles="regular" text="4"/>
    <NumberButton buttonStyles="regular" text="5"/>
    <NumberButton buttonStyles="regular" text="6"/>
    <NumberButton buttonStyles="symbol" text="-"/>
    <NumberButton buttonStyles="regular" text="1"/>
    <NumberButton buttonStyles="regular" text="2"/>
    <NumberButton buttonStyles="regular" text="3"/>
    <NumberButton buttonStyles="symbol" text="+"/>
    <NumberButton buttonStyles="zero" text="0"/>
    <NumberButton buttonStyles="symbol" text="="/>
    </div>
    
  );
};

export default App;
