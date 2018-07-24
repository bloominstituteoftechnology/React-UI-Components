import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay />
      <div className="row">
        <ActionButton text = "Clear" buttonStyle = "action-btn" />
        <NumberButton text = "÷" value = '/' buttonStyle = "operator-btn" />
      </div>
      <div className="row">
        <NumberButton text = "7" value = '7' />
        <NumberButton text = "8" value = '8' />
        <NumberButton text = "9" value = '9' />
        <NumberButton text = "X" value = '*' buttonStyle = "operator-btn" />
      </div>
      <div className="row">
        <NumberButton text = "4" value = '4' />
        <NumberButton text = "5" value = '5' />
        <NumberButton text = "6" value = '6' />
        <NumberButton text = "-" value = '-' buttonStyle = "operator-btn" />
      </div>
      <div className="row">
        <NumberButton text = "1" value = '1' />
        <NumberButton text = "2" value = '2' />
        <NumberButton text = "3" value = '3' />
        <NumberButton text = "+" value = '+' buttonStyle = "operator-btn" />
      </div>
      <div className="row">
      <ActionButton text = "0" buttonStyle = "action-btn" />
      <NumberButton text = "=" value = '=' buttonStyle = "operator-btn" />
      </div>

    </div>
  );
};

export default App;
