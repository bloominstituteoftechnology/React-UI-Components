import React, { Component } from "react";
import { CalculatorDisplay } from "./components/DisplayComponents";
import { ButtonsContainer } from "./components/ButtonsComponent";
import "./App.css";
// import * as math from "mathjs";

const operators = ["÷", "×", "-", "+", "="];
const numbers = ["clear", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: ""
    };
  }

  clicked = event => {
    if (event.target.name === "clear") {
      this.setState({
        total: 0,
        operation: ""
      });
    } else if (!Number(event.target.name)) {
      console.log("It's working!!!");
    } else {
      const newTotal = Number(event.target.name) + 5;
      this.setState({
        total: newTotal
      });
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
