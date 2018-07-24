import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render() {
    return (
    <div className="container-wrapper">
      <CalculatorDisplay />
      <div className="button-container">
      <ActionButton className="clear-text" text="clear" />
      <NumberButton className="red-button" text="&divide;" />
      </div>
      <div className="button-container">
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <NumberButton className="red-button" text="&times;" />
      </div>
      <div className="button-container">
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <NumberButton className="red-button" text="&minus;" />
      </div>
      <div className="button-container">
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <NumberButton className="red-button" text='+' />
      </div>
      <div className="button-container">
      <ActionButton className="number-text" text="0" />
      <NumberButton className="red-button" text="=" />
      </div>
    </div>
    );
  }
}   

export default App;
