import React, { Component } from 'react';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import OperatorContainer from './components/ButtonComponents/OperatorContainer';

const buttons = ['clear', '9', '8', '7', '6', '5', '4', '3', '2', '1'];

const operators = ['÷', 'x', '-', '+', '='];

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <CalculatorDisplay display="0" />
        <ButtonContainer />
        <OperatorContainer />
      </div>
    );
  }
}

export default App;
