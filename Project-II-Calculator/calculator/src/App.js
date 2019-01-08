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
      total: 0
    };
  }

  // operators = event => {
  //   event.target.name
  // }

  render() {
    return (
      <div className="container">
        <div className="calculator__container">
          <CalculatorDisplay total={this.state.total} />
          <ButtonsContainer operators={operators} numbers={numbers} />
        </div>
      </div>
    );
  }
}

export default App;
