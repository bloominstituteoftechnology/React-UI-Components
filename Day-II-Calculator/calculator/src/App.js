import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {total : 0};
  }
  clickHandler = button => {
    this.setState({total: this.state.total + 1 });
  }
  render() {
    return (
      <div className="app">
        <div className="row calculator">
          <CalculatorDisplay className="calc-display" number={this.state.total} />

          <div className="row">
            <ActionButton className="bigBtn" action="clear" onClick={this.clickHandler} />
            <ActionButton className="mathbtn" action="&#247;" onClick={this.clickHandler} />
          </div>

          <div className="row">
            <NumberButton number="7" onClick={this.clickHandler} />
            <NumberButton number="8" onClick={this.clickHandler} />
            <NumberButton number="9" onClick={this.clickHandler} />
            <ActionButton className="mathbtn" action="&times;" onClick={this.clickHandler} />
          </div>

          <div className="row">
            <NumberButton number="4" onClick={this.clickHandler} />
            <NumberButton number="5" onClick={this.clickHandler} />
            <NumberButton number="6" onClick={this.clickHandler} />
            <ActionButton className="mathbtn" action="&minus;" onClick={this.clickHandler} />
          </div>

          <div className="row">
            <NumberButton number="1" onClick={this.clickHandler} />
            <NumberButton number="2" onClick={this.clickHandler} />
            <NumberButton number="3" onClick={this.clickHandler} />
            <ActionButton className="mathbtn" action="&#43;" onClick={this.clickHandler} />
          </div>

          <div className="row">
            <NumberButton className="bigBtn" number="0" onClick={this.clickHandler} />
            <ActionButton  className="mathbtn" action="&#61;" onClick={this.clickHandler} />
          </div>
        </div>
      </div>
    );
  }

};

export default App;
