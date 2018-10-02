import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  state = {
    displayValue: '0'
  }


  render() {
    const { displayValue } = this.state;


    return (
      <div className="App">
        <CalculatorDisplay value={displayValue} />
        <div className="keypad">

          <ActionButton value="Clear" />
          <ActionButton value="/" />

          <div className="keys">
            <div className="num-keys">

              <NumberButton value="9" />
              <NumberButton value="8" />
              <NumberButton value="7" />
              <NumberButton value="6" />
              <NumberButton value="5" />
              <NumberButton value="4" />
              <NumberButton value="3" />
              <NumberButton value="2" />
              <NumberButton value="1" />
              <NumberButton value="0" />
            </div>
            <div className="function-keys">

              <ActionButton value="*" />
              <ActionButton value="-" />
              <ActionButton value="+" />
              <ActionButton value="=" />
            </div>
          </div>
        </div>

      </div>
    );
  }
};

export default App;
