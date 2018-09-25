import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className = "app">
      	<h3>Welcome to React Calculator</h3>
	<div className = "holder"></div>
        <CalculatorDisplay/>
        <ActionButton text="clear"/>
        <NumberButton number="/" type="operator"/>
        <NumberButton number="1" type="num"/>
        <NumberButton number="2" type="num"/>
        <NumberButton number="3" type="num"/>
        <NumberButton number="x" type="operator"/>
        <NumberButton number="4" type="num"/>
        <NumberButton number="5" type="num"/>
        <NumberButton number="6" type="num"/>
        <NumberButton number="-" type="operator"/>
        <NumberButton number="7" type="num"/>
        <NumberButton number="8" type="num"/>
        <NumberButton number="9" type="num"/>
        <NumberButton number="+" type="operator"/>
        <ActionButton text="0"/>
        <NumberButton number="=" type="operator"/>
    </div>
  );
};

export default App;
