import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
    return (
    <div className="App">
      <div className="display">0</div>
      <div className="longButtonRow">
        <NumberButton class="threeRow" text="clear" />
        <ActionButton class="operator" text="÷" />
      </div>
      <div className="number-button">
        <NumberButton class="number" text="7" />
        <NumberButton class="number" text="8" />
        <NumberButton class="number" text="9" />
        <ActionButton class="operator" text="X" />
      </div>
      <div className="number-button">
        <NumberButton class="number" text="4" />
        <NumberButton class="number" text="5" />
        <NumberButton class="number" text="6" />
        <ActionButton class="operator" text="-" />
        </div>
      <div className="number-button">
        <NumberButton class="number" text="1" />
        <NumberButton class="number" text="2" />
        <NumberButton class="number" text="3" />
        <ActionButton class="operator" text="+" />
      </div>
      <div class="longButtonRow">
        <NumberButton class="threeRow" text="0"/>
        <ActionButton class="operator" text="=" />
      </div>
    </div>
    )
}

export default App;
