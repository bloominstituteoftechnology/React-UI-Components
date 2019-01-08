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
}

export default App;
