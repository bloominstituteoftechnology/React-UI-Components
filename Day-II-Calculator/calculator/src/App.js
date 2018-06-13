import React from "react";
import "./App.css";
import Display from "./components/DisplayComponents/Display.js";

const clear = {
  prevNum: null,
  operator: null,
  newNum: "0"
};

const buttons = [
  ["clear"],
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  ["0"]
];

const divide = {
  name: "÷",
  operation: (x, y) => x / y
};

const multiply = {
  name: "×",
  operation: (x, y) => x * y
};

const subtract = {
  name: "−",
  operation: (x, y) => x - y
};

const add = {
  name: "+",
  operation: (x, y) => x + y
};

const equal = {
  name: "="
};

const operators = [multiply, divide, add, subtract, equal];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = clear;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let target = event.currentTarget;
    let type = target.attributes.type.value;
    let name = target.attributes.name.value;

    if (type === "number") {
      this.handleNumber(name);
    } else {
      if (name === "clear") {
        this.setState(clear);
      } else if (name === "=") {
        //handles equals button
        this.handleEqual();
      } else {
        //handles when an operator is entered
        this.handleOperators(name);
      }
    }
  }

  handleOperators(name) {
    let operatorSelection;
    for (let operatorIndex in operators) {
      if (operators[operatorIndex].name === name) {
        operatorSelection = operators[operatorIndex].operation;
      }
    }
    if (this.state.operator === null) {
      this.setState({
        prevNum: this.state.newNum,
        operator: operatorSelection,
        newNum: " "
      });
    } else {
      let newTotal = this.state.operator(
        parseFloat(this.state.prevNum),
        parseFloat(this.state.newNum)
      );
      newTotal = Math.round(newTotal * 1000) / 1000;
      newTotal = newTotal.toString();
      this.setState({
        prevNum: newTotal,
        operator: operatorSelection,
        newNum: " "
      });
    }
  }

  handleEqual() {
    if (this.state.operator !== null) {
      //handles if an operator has been entered
      if (this.state.newNum === " ") {
        //handles if a second operand hasn't been entered by negating the pending operator
        this.setState({
          prevNum: null,
          operator: null,
          newNum: this.state.prevNum
        });
      } else {
        //performs the operator on the two operands, which updates total and clears out other state
        let newTotal = this.state.operator(
          parseFloat(this.state.prevNum),
          parseFloat(this.state.newNum)
        );
        newTotal = Math.round(newTotal * 1000) / 1000;
        newTotal = newTotal.toString();
        this.setState({
          prevNum: null,
          operator: null,
          newNum: newTotal
        });
      }
    }
  }

  handleNumber(name) {
    if (this.state.newNum === "0" || this.state.newNum === " ") {
      this.setState({ newNum: name });
    } else {
      let newTotal = this.state.newNum + name;
      this.setState({ newNum: newTotal });
    }
  }

  render() {
    return (
      <Display
        newNum={this.state.newNum}
        buttons={buttons}
        operators={operators}
        handleChange={this.handleChange}
      />
    );
  }
}

export default App;
