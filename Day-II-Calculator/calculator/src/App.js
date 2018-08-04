import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: 0
    };
  }

  handleInput = props => {
    console.log("Click working");
    // this.setState({ expression: props.numberLabel });
  };

  render() {
    let numberButtons = [];
    for (let i = 9; i > 0; i--) {
      numberButtons.push(
        <NumberButton numberLabel={i} id={i} inputHandler={this.handleInput} />
      );
    }

    return (
      <div className="app-wrapper">
        <div className="calc-wrapper">
          <CalculatorDisplay total="0" />
          <ActionButton actionButtonLabel="clear" extraStyles="clearWidth" />
          <ActionButton actionButtonLabel="&divide;" />
          <div className="numbersButtonsDiv">
            {/* <NumberButton numberLabel="9" inputHandler={this.handleInput} />
            <NumberButton numberLabel="8" />
            <NumberButton numberLabel="7" />
            <NumberButton numberLabel="6" />
            <NumberButton numberLabel="5" />
            <NumberButton numberLabel="4" />
            <NumberButton numberLabel="3" />
            <NumberButton numberLabel="2" />
            <NumberButton numberLabel="1" /> */}
            {numberButtons}
            <NumberButton
              numberLabel="0"
              extraStyles="zeroNumberStyles"
              inputHandler={this.handleInput}
            />
          </div>

          <div className="actionButtonRow">
            <ActionButton
              actionButtonLabel="&times;"
              extraStyles="actionButtonWidth"
            />
            <ActionButton
              actionButtonLabel="-"
              extraStyles="actionButtonWidth"
            />
            <ActionButton
              actionButtonLabel="+"
              extraStyles="actionButtonWidth"
            />
            <ActionButton
              actionButtonLabel="="
              extraStyles="actionButtonWidth"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
