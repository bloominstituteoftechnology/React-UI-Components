import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/Display.js';


const clear = {
  total: "0",
  operator: null,
  newNum: ""
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

const operators = [
  multiply, divide, add, subtract, equal
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: "0",
      operator: null,
      newNum: ""
    };
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
        operatorSelection = operators[operatorIndex].operation
      }
    }
      this.setState({operator: operatorSelection});
  }

  handleEqual() {
    if (this.state.operator !== null) {
      //handles if an operator has been entered
      if (this.state.newNum === "") {
        //handles if a second operand hasn't been entered by negating the pending operator
        this.setState({ operator: null });
      }
      else {
        //performs the operator on the two operands, which updates total and clears out other state
        let newTotal = this.state.operator(parseFloat(this.state.total), parseFloat(this.state.newNum));
        newTotal = newTotal.toString();
        this.setState({
          total: newTotal,
          operator: null,
          newNum: ""
        });
      }
    }
  }

  handleNumber(name) {
    if (this.state.operator === null) {
      if (this.state.total === "0") {
        this.setState({ total: name });
      }
      else {
        let newTotal = this.state.total+name;
        this.setState({ total: newTotal});
      }
      console.log(this.state.total);
    }
    else {
      //handles a number being entered if an operation has been entered and is pending
      this.setState({ newNum: this.state.newNum + name });
    }
  }

  render() {
    return (<Display total={this.state.total} buttons={buttons} operators={operators} handleChange={this.handleChange} />);
  }

}

export default App;
