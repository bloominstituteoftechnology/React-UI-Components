import React, { Component } from "react";
import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <CalculatorDisplay displayStyle={'display'} text={'0'} />
        </div>
        <div>
          <ActionButton buttonStyle={'action'} text={'clear'} />
          <NumberButton buttonStyle={'numberRed'} text={"\u00f7"} />
        </div>
        <div>
          <NumberButton buttonStyle={'number'} text={'7'} />
          <NumberButton buttonStyle={'number'} text={'8'} />
          <NumberButton buttonStyle={'number'} text={'9'} />
          <NumberButton buttonStyle={'numberRed'} text={'x'} />
        </div>
        <div>
          <NumberButton buttonStyle={'number'} text={'4'} />
          <NumberButton buttonStyle={'number'} text={'5'} />
          <NumberButton buttonStyle={'number'} text={'6'} />
          <NumberButton buttonStyle={'numberRed'} text={'-'} />
        </div>
        <div>
          <NumberButton buttonStyle={'number'} text={'1'} />
          <NumberButton buttonStyle={'number'} text={'2'} />
          <NumberButton buttonStyle={'number'} text={'3'} />
          <NumberButton buttonStyle={'numberRed'} text={'+'} />
        </div>
        <div>
          <ActionButton buttonStyle={'action'} text={'0'} />
          <NumberButton buttonStyle={'numberRed'} text={'='} />
        </div>
      </div>
    );
  }
};

export default App;
