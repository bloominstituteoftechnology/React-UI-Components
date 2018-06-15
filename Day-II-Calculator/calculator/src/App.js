import React from 'react';
import './App.css';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
      prevEntry: "0",
      currEntry: "0",
      currOp: ""
    };
  }

  handleActionClick = (e) => {
    if (e === "clear") {
      this.handleClear();
    } else if (e === "+") {
      this.handleAdd();
    }
  }

  handleNumClick = (e) => {
    let newEntry = this.state.currEntry;
    let nextEntry = e;
    if(newEntry === "0" && nextEntry === "0") {
      return null;
    } else if(newEntry === "0" && nextEntry !== "0") {
      newEntry = nextEntry;
    } else {
      newEntry += e;
    }
    
    this.setState({result: newEntry, currEntry: newEntry});
  }

  handleAdd = () => {
    this.state.currOp = "+";
    this.state.prevEntry = this.state.currEntry;
    this.state.currEntry = "0";
  }

  subtract() {

  }
  
  multiply() {

  }

  divide() {

  }

  handleClear = () => {
    this.setState({result: 0, prevEntry: "0", currEntry: "0"});
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
        <ActionButton name="clear" handleActionClick={this.handleActionClick} />
        <ActionButton defaultStyle="operator-action-btn" name="/"  handleActionClick={this.handleActionClick} />
        <NumberButton name="7" handleNumClick={this.handleNumClick} />
        <NumberButton name="8" handleNumClick={this.handleNumClick} />
        <NumberButton name="9" handleNumClick={this.handleNumClick} />
        <ActionButton defaultStyle="operator-action-btn" name="*" handleActionClick={this.handleActionClick} />
        <NumberButton name="4" handleNumClick={this.handleNumClick} />
        <NumberButton name="5" handleNumClick={this.handleNumClick} />
        <NumberButton name="6" handleNumClick={this.handleNumClick} />
        <ActionButton defaultStyle="operator-action-btn" name="-" handleActionClick={this.handleActionClick} />
        <NumberButton name="1" handleNumClick={this.handleNumClick} />
        <NumberButton name="2" handleNumClick={this.handleNumClick} />
        <NumberButton name="3" handleNumClick={this.handleNumClick} />
        <ActionButton defaultStyle="operator-action-btn" name="+" handleActionClick={this.handleActionClick} />
        <NumberButton defaultStyle="action-btn" name="0" handleNumClick={this.handleNumClick} />
        <ActionButton defaultStyle="operator-action-btn" name="=" handleActionClick={this.handleActionClick} />
      </div>
    );
  }
};

export default App;