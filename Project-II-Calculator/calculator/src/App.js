import React, { Component } from 'react';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from "./components/ButtonComponents/ActionButton";
import OperatorsColumn from './components/ButtonComponents/OperatorsColumn';
import DigitSquare from './components/ButtonComponents/DigitSquare';
import NumberButton from "./components/ButtonComponents/NumberButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayText: "0"
    };
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay displayText={this.state.displayText}/>
        <ActionButton buttonSize="large-button" text="clear"/>
        <OperatorsColumn />
        <DigitSquare />
        <NumberButton buttonSize="large-button" text={0} />
      </div>
    );
  }
}

export default App;
