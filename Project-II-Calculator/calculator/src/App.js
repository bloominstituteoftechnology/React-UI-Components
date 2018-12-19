import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = 0;
  }
  render() {
    return (
      <div className="app">
        <div className="row">
          <CalculatorDisplay display={this.state}/>
        </div>
        <div className="row">
          <ActionButton buttonStyle="fat" text="clear"/>
          <ActionButton buttonStyle="function" text="/"/>
        </div>
        <div className="row">
          <NumberButton buttonStyle="number" text="7"/>
          <NumberButton buttonStyle="number" text="8"/>
          <NumberButton buttonStyle="number" text="9"/>
          <ActionButton buttonStyle="function" text="x"/>
        </div>
        <div className="row">
          <NumberButton buttonStyle="number" text="4"/>
          <NumberButton buttonStyle="number" text="5"/>
          <NumberButton buttonStyle="number" text="6"/>
          <ActionButton buttonStyle="function" text="-"/>
        </div>
        <div className="row">
          <NumberButton buttonStyle="number" text="1"/>
          <NumberButton buttonStyle="number" text="2"/>
          <NumberButton buttonStyle="number" text="3"/>
          <ActionButton buttonStyle="function" text="+"/>
        </div>
        <div className="row">
          <ActionButton buttonStyle="fat" text="0"/>
          <ActionButton buttonStyle="function" text="="/>
        </div>
      </div>
    );
  }
};

export default App;
