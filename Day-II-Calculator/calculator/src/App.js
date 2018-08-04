import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: [],
      total: 0,
      selectedButton: ""
    };
  }

  handleInput = props => {
    console.log("Total", this.state.total);
    if (this.state.total > 0) {
      this.setState({
        expression: [this.state.total, props.actionButtonValue]
      });
    }
    if (props.numberLabel !== undefined) {
      this.state.expression.push(props.numberLabel);
    } else {
      this.state.expression.push(" " + props.actionButtonValue + " ");
    }
    // this.setState({ expression: props.numberLabel });
    console.log("HandleInput", this.state.expression);
  };

  handleClear = () => {
    this.setState({ expression: [] });
  };

  handleEval = props => {
    let totalEval = eval(this.state.expression.join(""));
    console.log("Handle Eval 0", totalEval);
    console.log("Handle Eval", eval(totalEval, 10));
    this.setState({ expression: [], total: totalEval });
  };

  render() {
    let numberButtons = [];
    for (let i = 9; i > 0; i--) {
      numberButtons.push(
        <NumberButton numberLabel={i} key={i} inputHandler={this.handleInput} />
      );
    }

    return (
      <div className="app-wrapper">
        <div className="calc-wrapper">
          <CalculatorDisplay total={this.state.total} />
          <ActionButton
            actionButtonLabel="clear"
            actionButtonValue="clear"
            extraStyles="clearWidth"
            clearHandler={this.handleClear}
            inputHandler={this.handleInput}
          />
          <ActionButton
            actionButtonLabel="&divide;"
            actionButtonValue="/"
            inputHandler={this.handleInput}
          />
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
              numberLabel={0}
              extraStyles="zeroNumberStyles"
              inputHandler={this.handleInput}
            />
          </div>

          <div className="actionButtonRow">
            <ActionButton
              actionButtonLabel="&times;"
              actionButtonValue="*"
              extraStyles="actionButtonWidth"
              inputHandler={this.handleInput}
            />
            <ActionButton
              actionButtonLabel="-"
              actionButtonValue="-"
              extraStyles="actionButtonWidth"
              inputHandler={this.handleInput}
            />
            <ActionButton
              actionButtonLabel="+"
              actionButtonValue="+"
              extraStyles="actionButtonWidth"
              inputHandler={this.handleInput}
            />
            <ActionButton
              actionButtonLabel="="
              actionButtonValue="="
              extraStyles="actionButtonWidth"
              inputHandler={this.handleInput}
              evalHandler={this.handleEval}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
