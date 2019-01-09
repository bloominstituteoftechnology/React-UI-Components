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
      operator: "",
      content: []
    };
  }

  componentDidMount() {
    this.setState({
      total: [0]
    });
  }

  clearInput = () => {
    const newTotal = [0]; // Used an extra variable here as [0] turned into 0 without an array otherwise
    this.setState({
      firstNum: [],
      total: newTotal,
      operator: "",
      usedAlready: false
    });
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
      const currentDisplay = Number(this.state.total.join(""));
      const newTotal = [0];
      this.setState({
        firstNum: currentDisplay,
        operator: event.target.name,
        total: newTotal
      });
    } else if (event.target.name === "=") {
      // Equals input case
      if (this.state.total) {
        const firstNum = Number(this.state.firstNum);
        const secondNum = Number(this.state.total.join(""));
        let newTotal;
        if (this.state.operator === "÷") {
          newTotal = [firstNum / secondNum];
        } else if (this.state.operator === "×") {
          newTotal = [firstNum * secondNum];
        } else if (this.state.operator === "-") {
          newTotal = [firstNum - secondNum];
        } else if (this.state.operator === "+") {
          newTotal = [firstNum + secondNum];
        } else {
          alert("Something went wrong.");
        }
        this.setState({
          total: newTotal,
          operator: "",
          firstNum: [],
          usedAlready: true
        });
      } else {
        return;
      }
    } else {
      // Number input case
      if (this.state.total.length === 1 && this.state.total[0] === 0) {
        const newTotal = Number(event.target.name);
        this.setState({
          total: [newTotal]
        });
      } else {
        const newTotal = [...this.state.total, Number(event.target.name)];
        this.setState({
          total: newTotal
        });
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="calculator__container">
          <CalculatorDisplay content={this.state.total} />
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
