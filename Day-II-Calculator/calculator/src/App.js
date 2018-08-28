import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };
  }

  render () {
    return (
      <div className='calculator-container'>
        <CalculatorDisplay total={this.state.total} />
        <ActionButton buttonStyle='fat-action' buttonText='clear' />
        <ActionButton buttonText='÷' />
        <NumberButton buttonStyle='pixel-perfect-width' buttonText='7' />
        <NumberButton buttonText='8' />
        <NumberButton buttonText='9' />
        <ActionButton buttonText='×' />
        <NumberButton buttonStyle='pixel-perfect-width' buttonText='4' />
        <NumberButton buttonText='5' />
        <NumberButton buttonText='6' />
        <ActionButton buttonText='−' />
        <NumberButton buttonStyle='pixel-perfect-width' buttonText='1' />
        <NumberButton buttonText='2' />
        <NumberButton buttonText='3' />
        <ActionButton buttonText='+' />
        <NumberButton buttonStyle='fat-number' buttonText='0' />
        <ActionButton buttonText='=' />
      </div>
    );
  }
};

export default App;