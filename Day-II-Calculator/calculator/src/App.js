import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render() {
    return (
    <div>
      <CalculatorDisplay />
      <div className="button-container">
      <ActionButton className="clear-text" text="clear" />
      <NumberButton text="&divide;" />
      </div>
      <div className="button-container">
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <NumberButton text="&times;" />
      </div>
      <div className="button-container">
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <NumberButton text="&minus;" />
      </div>
      <div className="button-container">
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <NumberButton text='+' />
      </div>
      <div className="button-container">
      <ActionButton className="clear-text" text="0" />
      <NumberButton text="=" />
      </div>
    </div>
    );
  }
}   

export default App;
