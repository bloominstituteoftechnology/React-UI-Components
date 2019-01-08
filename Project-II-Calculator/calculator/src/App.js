import React, { Component } from 'react';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import OperatorButton from "./components/ButtonComponents/OperatorButton";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay />
      </div>
    );
  }
}

export default App;
