import React from 'react';
import './App.css';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: 0};
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleClick() {
    
  }

  add() {

  }

  subtract() {

  }
  
  multiply() {

  }

  divide() {

  }

  clear() {

  }

  render() {
    return (
      <div className="calc-container">
        {/* <h3>Welcome to React Calculator</h3>
        <p>
          We have given you a starter project. You'll want to build out your
          components in their respective files, remove this code and replace it
          with the proper components.
        </p>
        <p>
          <strong>
            Don't forget to `default export` your components and import them here
            inside of this file in order to make them work.
          </strong>
        </p> */}

        <CalcDisplay result={this.state.result} />
        <ActionButton name="clear" onClick={this.handleClick} />
        <ActionButton defaultStyle="operator-action-btn" name="/" onClick={this.handleClick} />
        <NumberButton name="7" onClick={this.handleClick} />
        <NumberButton name="8" onClick={this.handleClick} />
        <NumberButton name="9" onClick={this.handleClick} />
        <ActionButton defaultStyle="operator-action-btn" name="*" onClick={this.handleClick} />
        <NumberButton name="4" onClick={this.handleClick} />
        <NumberButton name="5" onClick={this.handleClick} />
        <NumberButton name="6" onClick={this.handleClick} />
        <ActionButton defaultStyle="operator-action-btn" name="-" onClick={this.handleClick} />
        <NumberButton name="1" onClick={this.handleClick} />
        <NumberButton name="2" onClick={this.handleClick} />
        <NumberButton name="3" onClick={this.handleClick} />
        <ActionButton defaultStyle="operator-action-btn" name="+" onClick={this.handleClick} />
        <NumberButton defaultStyle="action-btn" name="0" onClick={this.handleClick} />
        <ActionButton defaultStyle="operator-action-btn" name="=" onClick={this.handleClick} />
      </div>
    );
  }
};

export default App;
