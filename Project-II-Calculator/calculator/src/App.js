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
      b: null,
      newOperation: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  clear() {
    this.setState({
      displayText: "0",
      a: null,
      operator: null,
      nextNum: false,
      b: null,
      newOperation: true
    });
  }

  operatorPressed(pressed) {
    if (this.state.a !== null) {
      const operator = pressed;

      if (operator === "=") {
        this.evaluate();
      } else {
        const newDisplay = this.state.displayText + operator
        this.setState({
          displayText: newDisplay,
          operator,
          nextNum: true
        });
      }
    }
  }

  evaluate() {
    if (this.state.a !== null) {
      if(this.state.operator) {
        let a = this.state.a, b = this.state.b === null ? this.state.a : this.state.b, result;
        switch (this.state.operator) {
          case "+" :
            result = "=" + (a + b);
            break;

          case "−" :
            result = "=" + (a - b);
            break;

          case "×" :
            result = "=" + a * b;
            break;

          case "÷" :
            result = "=" + (b ? a / b : "Error");
        }

        this.setState({
          displayText: result,
          a: null,
          operator: null,
          nextNum: false,
          b: null,
          newOperation: true
        });
      } else {
        this.setState(prevState => ({
          displayText: "=" + prevState.a,
          a: null,
          newOperation: true
        }));
      }
    }
  }

  numPressed(pressed) {
    const newDisplay = this.state.displayText === "0"  || this.state.newOperation || this.state.nextNum ? 
                        pressed : this.state.displayText + pressed;

    if (this.state.operator) {
      this.setState({
        displayText: newDisplay,
        b: Number(newDisplay),
        nextNum: false,
        newOperation: false
      });
    } else {        
      this.setState({
        displayText: newDisplay,
        a: Number(newDisplay),
        nextNum: false,
        newOperation: false
      });
    }
  }

  handleBackspace() {    
    if (this.state.displayText !== "0") {
      if (isNaN(this.state.displayText) && !this.state.nextNum) {
        this.setState({displayText: "0"});
      } else if (this.state.displayText < 10) {
        if (this.state.b === null) {
          this.setState({
            displayText: "0",
            a: 0
          });
        } else {
          this.setState({
            displayText: "0",
            b: 0
          });
        }
      } else {
        if (this.state.b === null) {
          const newVal = Math.floor(this.state.a / 10);
          this.setState({
            displayText: String(newVal),
            a: newVal
          });
        } else {
          const newVal = Math.floor(this.state.b / 10);
          this.setState({
            displayText: String(newVal),
            b: newVal
          });
        }
      }
    }
  }

  handleClick(e) {
    const button = e.currentTarget.dataset.button;

    if(isNaN(button)) {
      if (["+−×÷"].includes(button)) {
        this.operatorPressed(button);
      } else if (button === "clear") {
        this.clear();
      }
    } else {
      this.numPressed(button)
    }
  }

  handleKeyPress(e) {
    const keyPressed = e.keyCode || e.which;

    if (keyPressed >= 48 && keyPressed <= 57) {
      this.numPressed(String.fromCharCode(keyPressed));
    } else if (keyPressed >= 96 && keyPressed <= 105) {
      this.numPressed(String(keyPressed - 96));
    } else {
      const operatorKeyValues = {
        "106": "×",
        "107": "+",
        "109": "−",
        "106": "÷",
        "189": "−",
        "191": "÷"
      }

      if (Object.keys(operatorKeyValues).includes(String(keyPressed))) {
        this.operatorPressed(operatorKeyValues[String(keyPressed)]);
      } else if (keyPressed === 13 || keyPressed === 187) {
        this.operatorPressed("=");
      } else if (keyPressed === 27 || keyPressed === 46) {
        this.clear();
      } else if (keyPressed === 8) {
        this.handleBackspace();
      }
    } 
  }

  render() {
    return (
      <div className="calculator" tabIndex="0" onKeyDown={e => this.handleKeyPress(e)}>
        <CalculatorDisplay displayText={this.state.displayText} />
        <ActionButton buttonSize="large-button" buttonName="clear" handleClick={this.handleClick} />
        <OperatorsColumn handleClick={this.handleClick} />
        <DigitSquare handleClick={this.handleClick} />
        <NumberButton buttonSize="large-button" buttonName={0} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
