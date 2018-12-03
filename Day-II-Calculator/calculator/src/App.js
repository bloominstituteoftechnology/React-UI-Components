import React from 'react';
import './App.css';
import CalculatorDesplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render() {
    return (
     
      <div className="calculator-component">
        
        <div className="container-display">
          <CalculatorDesplay />
        </div>

        <div className="container-buttons">       
          <div className="container">
            <ActionButton className="white three" text="clear" />
            <NumberButton bgColor="red" text="/" />
          </div>
          
          <div className="container">
            <NumberButton bgColor="white" text="7" />
            <NumberButton bgColor="white" text="8" />
            <NumberButton bgColor="white" text="9" />
            <NumberButton bgColor="red" text="X" />
          </div>

          <div className="container">
            <NumberButton bgColor="white" text="4" />
            <NumberButton bgColor="white" text="5" />
            <NumberButton bgColor="white" text="6" />
            <NumberButton bgColor="red" text="-" />
          </div>
        
          <div className="container">
            <NumberButton bgColor="white" text="1" />
            <NumberButton bgColor="white" text="2" />
            <NumberButton bgColor="white" text="3" />
            <NumberButton bgColor="red" text="-" />
          </div>
          
          <div className="container">
            <NumberButton bgColor="white three-quarter" text="0" />
            <NumberButton bgColor="red" text="=" />
          </div>
        </div>
        
      </div>
    );
  }
};

export default App;
