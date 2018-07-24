import React from 'react';
import './App.css';
import ActionButton from  "./components/ButtonComponents/ActionButton"; 
import NumberButton from './components/ButtonComponents/NumberButton'; 
import  Display from './components/DisplayComponents/CalculatorDisplay'; 

const App = () => {
  return (
    <div className = "container">
      
      <div className = "row-1">
        <Display />
      </div>
      <div className = "row-2">
        <ActionButton action = "clear" />
        <NumberButton text = "/" buttonStyle = "operator" />
      </div>
      <div className = "row-3">
        <NumberButton text = "7" buttonStyle = "number" />
        <NumberButton text = "8" buttonStyle = "number" />
        <NumberButton text = "9" buttonStyle = "number" />
        <NumberButton text = "*" buttonStyle = "operator" />
      </div>
      <div className = "row-4">
        <NumberButton text = "4" buttonStyle = "number" />
        <NumberButton text = "5" buttonStyle = "number" />
        <NumberButton text = "6" buttonStyle = "number" />
        <NumberButton text = "-" buttonStyle = "operator" />
      </div>
      <div className = "row-5">
        <NumberButton text = "1" buttonStyle = "number" />
        <NumberButton text = "2" buttonStyle = "number"/>
        <NumberButton text = "3" buttonStyle = "number"/>
        <NumberButton text = "+" buttonStyle = "operator"/>
      </div>
      <div className = "row-6">
        <ActionButton action = "0" />
        <NumberButton text = "=" buttonStyle = "operator" />
      </div>
      
    </div>
  );
};

export default App;
