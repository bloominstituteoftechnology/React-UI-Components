import React, { Component } from "react";
import "./App.css";
import update from "immutability-helper";
import math from "mathjs";
import Display from "../src/components/Display";
import Button from "../src/components/Button";
import Buttons from "../src/components/Buttons";

class App extends Component {
  constructor() {
    super();
    this.state = { operations: [] };
  }

  calculatorOperations = () => {
    let result = this.state.operations.join("");
    if (result) {
      result = math.eval(result);
      result = math.format(result, { precision: 14 });
      result = String(result);
      this.setState({
        operations: [result]
      });
    }
  };

  handleClick = e => {
    const value = e.target.getAttribute("date-value");
    switch (value) {
      case "clear":
        this.setState({
          operations: []
        });
        break;
      case "equal":
        this.calculatorOperations();
        break;
      default:
        const newOperations = update(this.state.operations, {
          $push: [value]
        });
        this.setState({
          operations: newOperations
        });
        break;
    }
  };
  render() {
    return (
      <div className="App">
        <Display data={this.state.operations} />
        <Buttons>
          <Button onClick={this.handleClick} label="C" value="clear" />
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="0" value="0" />

          <Button onClick={this.handleClick} label="/" value="/" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="." value="." />

          <Button onClick={this.handleClick} label="x" value="*" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="3" value="3" />

          <Button onClick={this.handleClick} label="-" value="-" />
          <Button onClick={this.handleClick} label="+" value="+" />
          <Button onClick={this.handleClick} label="=" value="equal" />
        </Buttons>
      </div>
    );
  }
}

export default App;
