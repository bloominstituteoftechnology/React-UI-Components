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
      b: null,
      newOperation: true
    });
  }

  operatorPressed(e) {
    if (this.state.a !== null) {
      const operator = e.currentTarget.textContent;

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
        if (this.state.b !== null) {
          let result;
          switch(this.state.operator) {
            case "+" :
              result = "=" + this.state.a + this.state.b;
              break;

            case "−" :
              result = "=" + this.state.a - this.state.b;
              break;

            case "×" :
              result = "=" + this.state.a * this.state.b;
              break;

            case "÷" :
              result = "=" + (this.state.b ? this.state.a / this.state.b : "Error");
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
            displayText: prevState.a,
            a: null,
            operator: null,
            nextNum: false,
            newOperation: true
          }));
        }
      } else {
        this.setState({
          a: null,
          nextNum: true
        });
      }
    }
  }

  numPressed(e) {
    const newDisplay = this.state.displayText === "0" || this.state.nextNum || this.state.newOperation ? 
                        e.currentTarget.textContent :
                        this.state.displayText + e.currentTarget.textContent;;

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
