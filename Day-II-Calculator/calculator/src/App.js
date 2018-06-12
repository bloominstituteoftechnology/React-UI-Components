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
    console.log(button);
  }
  render() {
    return (
      <div className="app" onClick={this.clickHandler}>
        <div className="row calculator">
          <CalculatorDisplay className="calc-display" number={this.state.total}/>

          <div className="row">
            <ActionButton className="bigBtn" action="clear"/>
            <ActionButton className="mathbtn" action="÷"/>
          </div>

          <div className="row">
            <NumberButton number="7"/>
            <NumberButton number="8"/>
            <NumberButton number="9"/>
            <ActionButton className="mathbtn" action="X"/>
          </div>

          <div className="row">
            <NumberButton number="4"/>
            <NumberButton number="5"/>
            <NumberButton number="6"/>
            <ActionButton className="mathbtn" action="−"/>
          </div>

          <div className="row">
            <NumberButton number="1"/>
            <NumberButton number="2"/>
            <NumberButton number="3"/>
            <ActionButton className="mathbtn" action="+"/>
          </div>

          <div className="row">
            <NumberButton className="bigBtn" number="0"/>
            <ActionButton  className="mathbtn" action="="/>
          </div>
        </div>
      </div>
    );
  }

};

export default App;
