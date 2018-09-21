import React from "react";
import { Component } from "react";
import "./App.css";
import { NumberButton } from "./components/ButtonComponents/NumberButton.js";
import { CalculatorDisplay } from "./components/DisplayComponents/CalculatorDisplay.js";
import { ActionButton } from "./components/ButtonComponents/ActionButton.js";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  addToInput = val => {
    this.setState({
      input: this.state.input + val
    });
  };
  equalSign = () => {
    this.setState({
      input: math.eval(this.state.input)
    });
  };
  render() {
    return (
      <div className="app-container">
        <div className="calculator-container">
          <div className="row">
            <CalculatorDisplay input={this.state.input} />
          </div>
          <div className="row">
            <ActionButton handleClear={() => this.setState({ input: "" })}>
              clear
            </ActionButton>
            <NumberButton handleClick={this.addToInput}>/</NumberButton>
          </div>
          <div className="row">
            <NumberButton handleClick={this.addToInput}>7</NumberButton>
            <NumberButton handleClick={this.addToInput}>8</NumberButton>
            <NumberButton handleClick={this.addToInput}>9</NumberButton>
            <NumberButton handleClick={this.addToInput}>*</NumberButton>
          </div>
          <div className="row">
            <NumberButton handleClick={this.addToInput}>4</NumberButton>
            <NumberButton handleClick={this.addToInput}>5</NumberButton>
            <NumberButton handleClick={this.addToInput}>6</NumberButton>
            <NumberButton handleClick={this.addToInput}>-</NumberButton>
          </div>
          <div className="row">
            <NumberButton handleClick={this.addToInput}>1</NumberButton>
            <NumberButton handleClick={this.addToInput}>2</NumberButton>
            <NumberButton handleClick={this.addToInput}>3</NumberButton>
            <NumberButton handleClick={this.addToInput}>+</NumberButton>
          </div>
          <div className="row">
            <ActionButton
              handleClear={() =>
                this.setState({
                  input: this.state.input + 0
                })
              }
            >
              0
            </ActionButton>
            <NumberButton handleClick={() => this.equalSign()}>=</NumberButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
