import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay.js";
import NumberButton from "./components/ButtonComponents/NumberButton.js";

import ActionButton from "./components/ButtonComponents/ActionButton.js";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: "0"
    };
  }
  handleButton = event => {
    console.log(event.target.textContent);

    if (event.target.textContent === "=") {
      this.setState({ total: 5 });
    } else {
      this.setState({
        total: `${this.state.total} ${event.target.textContent}`
      });
    }
    if (event.target.textContent === "clear") {
      this.setState({ total: 0 });
    }
  };
  render() {
    return (
      <div className={"calculator-container"}>
        <CalculatorDisplay className={"display"} data={this.state.total} />

        <div className={"button-components"}>
          {[0, 7, 8, 9, 4, 5, 6, 1, 2, 3, "clear"].map(num => (
            <NumberButton
              className={"number-key"}
              number={num}
              handlerButton={this.handleButton}
            />
          ))}
        </div>

        <div className={"action-components"}>
          {["+", "*", "/", "-", "="].map((action, index) => (
            <ActionButton
              className={"action-button"}
              keys={index}
              action={action}
              handlerButton={this.handleButton}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
