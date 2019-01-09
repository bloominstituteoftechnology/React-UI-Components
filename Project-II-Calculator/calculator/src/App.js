import React, { Component } from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

class App extends Component {
  state = {
    total: 0
  };

  handledisplayChange = value => {
    this.setState({
      total: (this.state.total = value)
    });
  };

  handleOperator = value => {
    // this.setState({
    //   math: this.state.math.push(value)
    // });
    // console.log(this.state.math);
  };

  render() {
    return (
      <div className="main-container">
        <div className="display">
          <CalculatorDisplay display={this.state.total} />
        </div>
        <div className="rows button-row-one">
          <ActionButton
            action="Clear"
            btnClass="button action-button clear"
            operator={this.handleOperator}
          />
          <ActionButton
            action="&divide;"
            btnClass="button action-button divide"
            operator={this.handleOperator}
          />
        </div>

        <div className="rows button-row-two">
          <NumberButton
            number={7}
            btnClass="button number-button seven"
            click={this.handledisplayChange}
          />
          <NumberButton
            number={8}
            btnClass="button number-button eight"
            click={this.handledisplayChange}
          />
          <NumberButton
            number={9}
            btnClass="button number-button nine"
            click={this.handledisplayChange}
          />
          <ActionButton
            action="&#215;"
            btnClass="button action-button multiply"
            operator={this.handleOperator}
          />
        </div>

        <div className="rows button-row-three">
          <NumberButton
            number={4}
            btnClass="button number-button four"
            click={this.handledisplayChange}
          />
          <NumberButton
            number={5}
            btnClass="button number-button five"
            click={this.handledisplayChange}
          />
          <NumberButton
            number={6}
            btnClass="button number-button six"
            click={this.handledisplayChange}
          />
          <ActionButton
            action="&#45;"
            btnClass="button action-button minus"
            operator={this.handleOperator}
          />
        </div>

        <div className="rows button-row-four">
          <NumberButton
            number={1}
            btnClass="button number-button one"
            click={this.handledisplayChange}
          />
          <NumberButton
            number={2}
            btnClass="button number-button two"
            click={this.handledisplayChange}
          />
          <NumberButton
            number={3}
            btnClass="button number-button three"
            click={this.handledisplayChange}
          />
          <ActionButton
            action="&#43;"
            btnClass="button action-button plus"
            operator={this.handleOperator}
          />
        </div>

        <div className="rows button-row-five">
          <NumberButton
            number={0}
            btnClass="button number-button zero"
            click={this.handledisplayChange}
          />
          <ActionButton
            action="&#61;"
            btnClass="button action-button equals"
            operator={this.handleOperator}
          />
        </div>
      </div>
    );
  }
}

export default App;
