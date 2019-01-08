import React, { Component } from 'react';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from "./components/ButtonComponents/ActionButton";
import DigitSquare from './components/ButtonComponents/DigitSquare';
import NumberButton from "./components/ButtonComponents/NumberButton";
import OperatorsColumn from './components/ButtonComponents/OperatorsColumn';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay />
        <ActionButton buttonSize="large-button" text="clear"/>
        <OperatorsColumn />
        <DigitSquare />
        <NumberButton buttonSize="large-button" text={0} />
      </div>
    );
  }
}

export default App;
