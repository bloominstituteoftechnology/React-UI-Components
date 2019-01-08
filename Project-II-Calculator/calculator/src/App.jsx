import React, { Component } from 'react';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const buttons = ['clear', '9', '8', '7', '6', '5', '4', '3', '2', '1'];

const operators = ['÷', 'x', '-', '+', '='];

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <CalculatorDisplay display="0" />
        <NumberButton text="9" />
        <NumberButton text="9" />
        <NumberButton text="9" />
        <NumberButton text="9" />
      </div>
    );
  }
}

export default App;
