
import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import './components/ButtonComponents/Button.css';
import './components/DisplayComponents/Display.css'




const App = () => {
  return (
    <div className='App'>
      <NumberButton buttonStyle={this.props.buttonStyle} text={this.props.text} />
      <ActionButton />
      <CalculatorDisplay />
    </div>
  );
};

export default App;
