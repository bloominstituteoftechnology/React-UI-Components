import React, { Component } from 'react';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import OperatorContainer from './components/ButtonComponents/OperatorContainer';

const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1'];

const operators = ['÷', 'x', '-', '+', '='];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    };
  }

  clicked = event => {
    console.log('clicked');
    // console.log(event.target.name);
  };

  render() {
    return (
      <div className="container">
        <CalculatorDisplay display={this.state.total} />
        <ButtonContainer numbers={numbers} clicked={this.clicked} />
        <OperatorContainer operators={operators} clicked={this.clicked} />
      </div>
    );
  }
}

export default App;
