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
  ["1", "2", "3"]
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
    this.state = clear;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let type = target.type;
    let name = target.name;

    if (type === "number") {
      this.handleNumber(name);
    } else {
      if (name === "clear") {
        this.setState(clear);
      } else if (name === "equal") {
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
    for (let operator in operators) {
      if (operator.name === name) {
        operatorSelection = operator.operation
      }
      this.setState({operator: operatorSelection});
    }
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
        let newTotal = this.state.operator(this.state.total, this.state.newNum);
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
        this.setState({ total: this.state.total + name});
      }
      this.setState({ total: this.state.value });
    }
    else {
      //handles a number being entered if an operation has been entered and is pending
      this.setState({ newNum: this.state.newNum + name });
    }
  }


  render() {
    let totalArray = [[ this.state.total ]];
    let fullButtons = buttons.concat(totalArray);
    return (<Display total={this.state.total} buttons={fullButtons} operators={operators} />);
  }

}

export default App;
