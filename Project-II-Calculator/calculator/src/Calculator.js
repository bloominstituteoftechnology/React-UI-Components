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
      total: ""
    };
  }

  addtoInput = val => {
    this.setState({ input: this.state.input + val });
  };

  render() {
    return (
      <div className="Calculator">
        <div className="row">
          <CalculatorDisplay buttonStyle="CalculatorDisplay" text="0" />
        </div>
        <div className="row">
          <ActionButton
            OnClick={this.addtoInput}
            buttonStyle="actionBtn"
            text="clear"
          />
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="operator"
            text="÷"
          />
        </div>
        <div className="row">
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="7"
          />
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="8"
          />
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="9"
          />
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="operator"
            text="x"
          />
        </div>
        <div className="row">
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="4"
          />
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="5"
          />
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="6"
          />
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="operator"
            text="-"
          />
        </div>
        <div className="row">
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="1"
          />
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="2"
          />
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="numBtnStyle"
            text="3"
          />
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="operator"
            text="+"
          />
        </div>
        <div className="row">
          <ActionButton
            OnClick={this.addtoInput}
            buttonStyle="actionBtn"
            text="0"
          />
          <NumberButton
            OnClick={this.addtoInput}
            buttonStyle="operator"
            text="="
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
