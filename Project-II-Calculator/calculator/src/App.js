import React, { Component } from 'react';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from "./components/ButtonComponents/ActionButton";
import OperatorsColumn from './components/ButtonComponents/OperatorsColumn';
import DigitSquare from './components/ButtonComponents/DigitSquare';
import NumberButton from "./components/ButtonComponents/NumberButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayText: "0",
      a: null,
      operator: null,
      nextNum: false,
      b: null
    };

    this.clear = this.clear.bind(this);
    this.operatorPressed = this.operatorPressed.bind(this);
    this.numPressed = this.numPressed.bind(this);
  }

  clear() {
    this.setState({
      displayText: "0",
      a: null,
      operator: null,
      nextNum: false,
      b: null
    });
  }

  operatorPressed(e) {
    const operator = e.currentTarget.textContent;

    if (operator === "=") {
      this.evaluate();
    } else {
      this.setState({
        operator,
        nextNum: true
      });
    }
  }

  evaluate() {
    alert("hey");
  }

  numPressed(e) {
    const newDisplay = this.state.displayText === "0" || this.state.nextNum ? 
                        e.currentTarget.textContent :
                        this.state.displayText + e.currentTarget.textContent;;

    if (this.state.operator) {
      this.setState({
        displayText: newDisplay,
        b: Number(newDisplay),
        nextNum: false
      });
    } else {        
      this.setState({
        displayText: newDisplay,
        a: Number(newDisplay),
        nextNum: false
      });
    }
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay displayText={this.state.displayText} />
        <ActionButton buttonSize="large-button" text="clear" function={this.clear} />
        <OperatorsColumn function={this.operatorPressed} />
        <DigitSquare function={this.numPressed} />
        <NumberButton buttonSize="large-button" text={0} function={this.numPressed} />
      </div>
    );
  }
}

export default App;
