import React, { Component } from "react";
// import "./App.css";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const calcNumbers = [
  { symbol: "clear", id: "clear" },
  { symbol: 7, id: 7 },
  { symbol: 8, id: 8 },
  { symbol: 9, id: 9 },
  { symbol: 4, id: 4 },
  { symbol: 5, id: 5 },
  { symbol: 6, id: 6 },
  { symbol: 1, id: 1 },
  { symbol: 2, id: 2 },
  { symbol: 3, id: 3 },
  { symbol: 0, id: 0 }
];

const symbols = [
  {
    symbol: <i className="fas fa-divide" />,
    id: "divide",
    operator: "/"
  },
  {
    symbol: <i className="fas fa-times" />,
    id: "multiply",
    operator: "*"
  },
  {
    symbol: <i className="fas fa-minus" />,
    id: "minus",
    operator: "-"
  },
  {
    symbol: <i className="fas fa-plus" />,
    id: "plus",
    operator: "+"
  },
  {
    symbol: <i className="fas fa-equals" />,
    id: "equals",
    operator: "="
  }
];

const initialState = "0";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      total: ""
    };

    // this.baseDisplay = "0";

    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick(event) {
    const { value } = event.target;

    if (value === "=") {
      return this.handleEqual(value);
    }

    this.setState({
      input: this.state.input + value
    });

    console.log("Clicked");
  }

  handleClear(event) {
    this.setState({ input: "" });
  }

  handleEqual(value) {
    this.setState({
      input: eval(this.state.input)
    });
  }

  render() {
    return (
      <div className="app">
        <div className="calc-display">
          <CalculatorDisplay text={this.state.input} />
        </div>

        <div className="button-container">
          <div className="main-buttons">
            {calcNumbers.map(button => {
              if (button.id === "clear") {
                return (
                  <ActionButton
                    key={button.id}
                    text={button.symbol}
                    buttonStyle="action-button"
                    handleClick={this.handleClear}
                  />
                );
              }
              if (button.id === 0) {
                return (
                  <ActionButton
                    key={button.id}
                    text={button.symbol}
                    buttonStyle="action-button"
                    handleClick={this.handleClick}
                    value={button.symbol}
                  />
                );
              }

              return (
                <NumberButton
                  key={button.id}
                  text={button.symbol}
                  value={button.symbol}
                  handleClick={this.handleClick}
                />
              );
            })}
          </div>
          <div className="button-symbol-container">
            {symbols.map(button => {
              return (
                <NumberButton
                  key={button.id}
                  text={button.symbol}
                  buttonStyle="symbol-button"
                  value={button.operator}
                  handleClick={this.handleClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
