import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: "",
      temp: "",
      tempAction: ""
    };
  }
  clickedNumber = value => {
    if (this.state.temp !== "") {
      this.setState({ total: this.state.total + value });
    } else {
      this.setState({ total: this.state.total + value });
    }
  };
  clearCalculator = () => {
    this.setState({ total: "0" });
  };
  actionCalculator = operation => {
    if (operation === "clear") {
      this.setState({ total: "", temp: "", temp2: "" });
    } else if (operation === "=") {
      console.log("total: ", this.state.total);
      console.log("temp: ", this.state.temp);
      console.log("tempAction: ", this.state.tempAction);
      if (this.state.tempAction === "+") {
        this.setState({
          total: Number(this.state.temp) + Number(this.state.total)
        });
      } else if (this.state.tempAction === "−") {
        this.setState({
          total: Number(this.state.temp) - Number(this.state.total)
        });
      } else if (this.state.tempAction === "×") {
        this.setState({
          total: Number(this.state.temp) * Number(this.state.total)
        });
      } else if (this.state.tempAction === "÷") {
        this.setState({
          total: Number.isInteger(
            Number(this.state.temp) / Number(this.state.total)
          )
            ? Number(this.state.temp) / Number(this.state.total)
            : (Number(this.state.temp) / Number(this.state.total)).toFixed(3)
        });
      }
    } else {
      this.setState({ tempAction: operation, temp: this.state.total });
      setTimeout(() => this.setState({ total: "" }), 10);
    }
  };

  render() {
    return (
      <div className="calculatorContainer">
        <CalculatorDisplay name={this.state.total} />
        <div className="inputButtons">
          <div className="leftSideInput">
            <ActionButton
              actionCalculator={this.actionCalculator}
              customActionStyle="clear-button"
              name="clear"
            />
            <div className="nineNumberButtons">
              <NumberButton clickedNumber={this.clickedNumber} name="7" />
              <NumberButton clickedNumber={this.clickedNumber} name="8" />
              <NumberButton clickedNumber={this.clickedNumber} name="9" />
              <NumberButton clickedNumber={this.clickedNumber} name="4" />
              <NumberButton clickedNumber={this.clickedNumber} name="5" />
              <NumberButton clickedNumber={this.clickedNumber} name="6" />
              <NumberButton clickedNumber={this.clickedNumber} name="1" />
              <NumberButton clickedNumber={this.clickedNumber} name="2" />
              <NumberButton clickedNumber={this.clickedNumber} name="3" />
            </div>
            <NumberButton
              clickedNumber={this.clickedNumber}
              customNumberStyle="zero-button"
              name="0"
            />
          </div>
          <div className="rightSideInput">
            <ActionButton actionCalculator={this.actionCalculator} name="÷" />
            <ActionButton actionCalculator={this.actionCalculator} name="×" />
            <ActionButton actionCalculator={this.actionCalculator} name="−" />
            <ActionButton actionCalculator={this.actionCalculator} name="+" />
            <ActionButton actionCalculator={this.actionCalculator} name="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
