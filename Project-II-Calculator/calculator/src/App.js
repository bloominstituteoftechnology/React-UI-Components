import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends Component {
  state = {
    total: 0
  };

  clear = () => {
    this.setState({
      total: 0
    });
  };

  num = e => {
    this.setState({
      total: e.target.textContent
    });
  };
  render() {
    return (
      <div className="cal-container">
        <CalculatorDisplay display="display" total={this.state.total} />
        <ActionButton onClick={this.clear} buttonStyle="action" text="clear" />
        <NumberButton buttonStyle="symbol" text="÷" />
        <NumberButton onClick={this.num} buttonStyle="num" text="7" />
        <NumberButton onClick={this.num} buttonStyle="num" text="8" />
        <NumberButton onClick={this.num} buttonStyle="num" text="9" />
        <NumberButton onClick={this.num} buttonStyle="symbol" text="x" />
        <NumberButton onClick={this.num} buttonStyle="num" text="4" />
        <NumberButton onClick={this.num} buttonStyle="num" text="5" />
        <NumberButton onClick={this.num} buttonStyle="num" text="6" />
        <NumberButton onClick={this.num} buttonStyle="symbol" text="-" />
        <NumberButton onClick={this.num} buttonStyle="num" text="1" />
        <NumberButton onClick={this.num} buttonStyle="num" text="2" />
        <NumberButton onClick={this.num} buttonStyle="num" text="3" />
        <NumberButton onClick={this.num} buttonStyle="symbol" text="+" />
        <ActionButton onClick={this.num} buttonStyle="action" text="0" />
        <NumberButton buttonStyle="symbol" text="=" />
      </div>
    );
  }
}

export default App;
