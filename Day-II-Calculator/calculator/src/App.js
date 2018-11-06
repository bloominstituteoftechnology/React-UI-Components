import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const buttonArr = [
  { text: "clear", buttonStyle: 'num action-btn'},
  
  { text: 7, buttonStyle: 'num'},{ text: 8, buttonStyle: 'num'},{ text: 9, buttonStyle: 'num'},
  
  
  { text: 4, buttonStyle: 'num'},{ text: 5, buttonStyle: 'num'},{ text: 6, buttonStyle: 'num'},
  
  
  { text: 1, buttonStyle: 'num'},{ text: 2, buttonStyle: 'num'},{ text: 3, buttonStyle: 'num'},
  
  { text: 0, buttonStyle: 'num action-btn'},
 
];
const operatorArr = [
  { text: "%", buttonStyle: 'num operator'},
  { text: "x", buttonStyle: 'num operator'},
  { text: "-", buttonStyle: 'num operator'},
  { text: "+", buttonStyle: 'num operator'}, 
  { text: "=", buttonStyle: 'num operator'},
];
const currentValue = 0;

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay currentValue={currentValue}/>
      <div className="buttons">
        <div className="btn-content">
        {buttonArr.map(btn => <NumberButton btn={btn} />)}
        </div>
        <div className="operator-content">
        {operatorArr.map(btn => <NumberButton btn={btn} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
