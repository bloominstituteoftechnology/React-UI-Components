import React, { Component } from "react";
import { CalculatorDisplay } from "./components/DisplayComponents";
import { ButtonsContainer } from "./components/ButtonsComponent";
import "./App.css";

const operators = ["÷", "×", "-", "+", "="];
const numbers = ["clear", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usedAlready: false,
      total: [],
      firstNum: "",
      operator: ""
    };
  }

  componentDidMount() {
    this.setState({
      total: [0]
    });
  }

  clearInput = () => {
    this.setState({
      firstNum: "",
      total: [0],
      operator: "",
      usedAlready: false
    });
  };

  equalsInput = () => {
    if (this.state.total[0] !== 0 && this.state.operator) {
      const firstNum = parseFloat(this.state.firstNum);
      const secondNum = parseFloat(this.state.total.join(""));
      let newTotal;
      if (this.state.operator === "÷") {
        newTotal = firstNum / secondNum;
      } else if (this.state.operator === "×") {
        newTotal = firstNum * secondNum;
      } else if (this.state.operator === "-") {
        newTotal = firstNum - secondNum;
      } else if (this.state.operator === "+") {
        newTotal = firstNum + secondNum;
      }
      if (newTotal.length > 11) {
        newTotal = "ERROR";
      }
      this.setState({
        total: [newTotal],
        operator: "",
        firstNum: "",
        usedAlready: true
      });
    } else {
      return;
    }
  };

  numberInput = event => {
    if (this.state.operator && this.state.firstNum === "") {
      // Logic that moves total to firstNum only after the operator has been selected and then when another number is clicked
      const currentDisplay = parseFloat(this.state.total.join(""));
      this.setState({
        firstNum: currentDisplay,
        total: [event.target.name] // Sets the number being displayed to whatever you clicked after total moved to firstNum
      });
    } else if (this.state.total.length === 1 && this.state.total[0] === 0) {
      const newTotal = parseFloat(event.target.name);
      this.setState({
        total: [newTotal]
      });
    } else {
      const newTotal = [...this.state.total, parseFloat(event.target.name)];
      this.setState({
        total: newTotal
      });
    }
  };

  clicked = event => {
    if (event.target.name === "clear") {
      // Clear input case
      this.clearInput();
    } else if (
      event.target.name === "÷" ||
      event.target.name === "×" ||
      event.target.name === "-" ||
      event.target.name === "+"
    ) {
      // Operator input (excluding "=") case
      this.setState({
        operator: event.target.name
      });
    } else if (event.target.name === "=") {
      // Equals input case
      this.equalsInput();
    } else {
      // Number input (0 - 9) cases
      this.numberInput(event);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="calculator__container">
          <CalculatorDisplay total={this.state.total} />
          <ButtonsContainer
            operators={operators}
            numbers={numbers}
            clicked={this.clicked}
          />
        </div>
      </div>
    );
  }
}

export default App;
