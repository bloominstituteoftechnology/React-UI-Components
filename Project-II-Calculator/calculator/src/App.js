import React, { Component } from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import * as math from "mathjs";

class App extends Component {
  state = {
    content: [], //15910+1540
    result: 0,
    operator: "",
    isSubmitted: false
  };

  handleClear = () => {
    this.setState({ result: 0, content: [], secNumber: 0 });
  };

  handleChange = e => {
    let firstValue = this.state.content;
    firstValue.push(e.target.value);
    const finalFirstValue = firstValue;
    this.setState({ content: finalFirstValue });
  };

  calculate = () => {
    const result = math.eval(this.state.content.join("")).toFixed(3);
    this.setState({ result });
    console.log(result);
  };
  render() {
    return (
      <div className="app">
        <CalculatorDisplay calculate={this.calculate} state={this.state} />
        <NumberButton
          handleChange={this.handleChange}
          handleClear={this.handleClear}
          calculate={this.calculate}
          state={this.state}
        />
      </div>
    );
  }
}

export default App;
