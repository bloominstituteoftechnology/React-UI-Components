import React from "react";
import "./Calculator.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      total: "0"
    };
  }

  addtoInput = val => {
    console.log(val);
    this.setState({
      input: this.state.input + val,
      total: this.state.input + val
    });
  };

  clearDisplay = () => {
    this.setState({ input: "", total: "0" });
  };

  render() {
    return (
      <div className="Calculator">
        <div className="row">
          <CalculatorDisplay
            buttonStyle="CalculatorDisplay"
            text={this.state.total}
          />
        </div>
        <div className="row">
          <ActionButton
            onClick={this.clearDisplay}
            buttonStyle="actionBtn"
            text="clear"
          />
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="operator"
            text="÷"
          />
        </div>
        <div className="row">
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="7"
          />
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="8"
          />
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="9"
          />
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="operator"
            text="x"
          />
        </div>
        <div className="row">
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="4"
          />
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="5"
          />
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="6"
          />
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="operator"
            text="-"
          />
        </div>
        <div className="row">
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="1"
          />
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="2"
          />
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="3"
          />
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="operator"
            text="+"
          />
        </div>
        <div className="row">
          <ActionButton
            onClick={this.addtoInput}
            buttonStyle="actionBtn"
            text="0"
          />
          <NumberButton
            onClick={this.addtoInput}
            buttonStyle="operator"
            text="="
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
