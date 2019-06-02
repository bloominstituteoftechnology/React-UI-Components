import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import Number from './components/ButtonComponents/NumberButton';
import Action from './components/ButtonComponents/ActionButton';

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const division = "÷";
const multiplication = "x";
const subtraction = "-";
const addition = "+";
const equals = "=";

const App = () => {
  return (
    <div className="calcbox">
      <Display />
      <div className="bottomcontent">
        <div className="leftside">
          <div className="clearbutton">
            clear
          </div>
          <div className="numberbox">
            {numbers.map( (num) => {
              return <Number numbertype={num} />
            })}
          </div>
          <div className="zero">
            0
          </div>
        </div>
        <div className="functionbox">
          <Action actiontype={division} />
          <Action actiontype={multiplication} />
          <Action actiontype={subtraction} />
          <Action actiontype={addition} />
          <Action actiontype={equals} />
        </div>
      </div>
    </div>
  );
};

export default App;
