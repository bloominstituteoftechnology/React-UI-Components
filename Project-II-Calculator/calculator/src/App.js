import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

function calculate(obj, buttonText) {
  if (buttonText === "clear") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  return {
    total: buttonText
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    next : null,
    total : 0,
    operation: null,
    }
  }

  handleClick = buttonText => {
    this.setState(calculate(this.state, buttonText));
  };

  render() {
    return (
      <div className="app">
        <div className="row">
          <CalculatorDisplay display={this.state.total}/>
        </div>
        <div className="row">
          <ActionButton buttonStyle="fat" text="clear" clickHandler={this.handleClick}/>
          <ActionButton buttonStyle="function" text="/" clickHandler={this.handleClick}/>
        </div>
        <div className="row">
          <NumberButton buttonStyle="number" text="7" clickHandler={this.handleClick}/>
          <NumberButton buttonStyle="number" text="8" clickHandler={this.handleClick}/>
          <NumberButton buttonStyle="number" text="9" clickHandler={this.handleClick}/>
          <ActionButton buttonStyle="function" text="x" clickHandler={this.handleClick}/>
        </div>
        <div className="row">
          <NumberButton buttonStyle="number" text="4" clickHandler={this.handleClick}/>
          <NumberButton buttonStyle="number" text="5" clickHandler={this.handleClick}/>
          <NumberButton buttonStyle="number" text="6" clickHandler={this.handleClick}/>
          <ActionButton buttonStyle="function" text="-" clickHandler={this.handleClick}/>
        </div>
        <div className="row">
          <NumberButton buttonStyle="number" text="1" clickHandler={this.handleClick}/>
          <NumberButton buttonStyle="number" text="2" clickHandler={this.handleClick}/>
          <NumberButton buttonStyle="number" text="3" clickHandler={this.handleClick}/>
          <ActionButton buttonStyle="function" text="+" clickHandler={this.handleClick}/>
        </div>
        <div className="row">
          <ActionButton buttonStyle="fat" text="0" clickHandler={this.handleClick}/>
          <ActionButton buttonStyle="function" text="=" clickHandler={this.handleClick}/>
        </div>
      </div>
    );
  }
};

export default App;
