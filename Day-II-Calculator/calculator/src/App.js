import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className= "container calContainer"> 

      <CalculatorDisplay result="0"/>

      <ActionButton text= "clear" buttonStyle = "large"/>
      <ActionButton text = "÷" buttonStyle = "operator"/>

      <NumberButton text = "7" buttonStyle = "num"/>
      <NumberButton text = "8" buttonStyle = "num"/>
      <NumberButton text = "9" buttonStyle = "num"/>
      <ActionButton text = "x" buttonStyle = "operator"/>

      <NumberButton text = "4" buttonStyle = "num"/>
      <NumberButton text = "5" buttonStyle = "num"/>
      <NumberButton text = "6" buttonStyle = "num"/>
      <ActionButton text = "-" buttonStyle = "operator"/>

      <NumberButton text = "1" buttonStyle = "num"/>
      <NumberButton text = "2" buttonStyle = "num"/>
      <NumberButton text = "3" buttonStyle = "num"/>
      <ActionButton text = "+" buttonStyle = "operator"/>

      <ActionButton text= "0" buttonStyle = "large num"/>
      <ActionButton text = "=" buttonStyle = "operator"/>  

    </div>
    
  );
};

export default App;
