import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const Numbers = [
  {buttonStyle: "number-button", text: 1}, 
  {buttonStyle: "number-button", text:2}, 
  {buttonStyle:"number-button", text:3}, 
  {buttonStyle:"number-button", text:4},
  {buttonStyle:"number-button", text:5},
  {buttonStyle:"number-button", text:6},
  {buttonStyle:"number-button", text:7},
  {buttonStyle:"number-button", text:8},
  {buttonStyle:"number-button", text:9},
  {buttonStyle:"operator-button", text:'÷'},
  {buttonStyle:"operator-button", text:'x'},
  {buttonStyle:"operator-button", text:'-'},
  {buttonStyle:"operator-button", text:'+'},
  {buttonStyle:"operator-button", text:'='},
];

const Action = [{actionButtonStyle:"zero-button", text:0}, {actionButtonStyle:"clear-button", text:"clear"}];

const App = () => {
  return (
    <div className="app">
        <CalculatorDisplay/>
        <div className="buttons">
          <ActionButton action={Action[1]}/>
          <NumberButton number={Numbers[0]}/>
          <NumberButton number={Numbers[1]}/>
          <NumberButton number={Numbers[2]}/>
          <NumberButton number={Numbers[3]}/>
          <NumberButton number={Numbers[4]}/>
          <NumberButton number={Numbers[5]}/>
          <NumberButton number={Numbers[6]}/>
          <NumberButton number={Numbers[7]}/>
          <NumberButton number={Numbers[8]}/>
          <NumberButton number={Numbers[9]}/>
          <NumberButton number={Numbers[10]}/>
          <NumberButton number={Numbers[11]}/>
          <NumberButton number={Numbers[12]}/>
          <NumberButton number={Numbers[13]}/>
          <ActionButton action={Action[0]}/>
        </div>
    </div>
  );
};

export default App;
