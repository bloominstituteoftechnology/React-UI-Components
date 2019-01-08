import React, { Component } from 'react';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import OperatorButton from "./components/ButtonComponents/OperatorButton";

class App extends Component {
  constructor() {
    super();

    this.operators = ["+", "−", "×", "÷", "="];
    this.digits = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay />
        <ActionButton buttonSize="large-button" text="clear"/>
        <div className="operator-button-column">
          {this.operators.map(operator => <OperatorButton text={operator} />)}
        </div>
        <div className="digit-square">
          {this.digits.map(digit => <NumberButton buttonSize="small-button" text={digit} />)}
        </div>
        <NumberButton buttonSize="large-button" text={0} />
      </div>
    );
  }
}

export default App;
