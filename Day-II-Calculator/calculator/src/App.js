import React from 'react';
import './App.css';
import ActionButton from  "./components/ButtonComponents/ActionButton"; 
import  CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton'; 

const App = () => {

    return <div className="container">
        <CalculatorDisplay />
  
        <ActionButton text="clear" buttonStyle="special number" />
        <NumberButton text="%" buttonStyle="key symbol" />
  
        <NumberButton text="7" buttonStyle="key number" />
        <NumberButton text="8" buttonStyle="key number" />
        <NumberButton text="9" buttonStyle="key number" />
        <NumberButton text="X" buttonStyle="key symbol" />
  
        <NumberButton text="4" buttonStyle="key number" />
        <NumberButton text="5" buttonStyle="key number" />
        <NumberButton text="6" buttonStyle="key number" />
        <NumberButton text="-" buttonStyle="key symbol" />
  
        <NumberButton text="1" buttonStyle="key number" />
        <NumberButton text="2" buttonStyle="key number" />
        <NumberButton text="3" buttonStyle="key number" />
        <NumberButton text="+" buttonStyle="key symbol" />
  
        <ActionButton text="0" buttonStyle="special number" />
        <NumberButton text="=" buttonStyle="key symbol" />
      </div>;
  };

    
 


export default App;
