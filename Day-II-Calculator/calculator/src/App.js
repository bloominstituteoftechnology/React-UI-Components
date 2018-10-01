import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className = 'whole-calculator'>
      <CalculatorDisplay className = 'row1' displayStyle = 'display-box' />
      <div className = 'row2'>
        <NumberButton displayStyle = 'numberButtonBig' number = 'Clear' />
        <ActionButton displayStyle = 'actionButton' action = 'x' />
      </div>
      <div className = 'row3-5'>
        <NumberButton displayStyle = 'numberButton' number = '7' />
        <NumberButton displayStyle = 'numberButton' number = '8' />
        <NumberButton displayStyle = 'numberButton' number = '9' />
        <ActionButton displayStyle = 'actionButton' action = 'x' />
      </div>
      <div className = 'row3-5'>
        <NumberButton displayStyle = 'numberButton' number = '4' />
        <NumberButton displayStyle = 'numberButton' number = '5' />
        <NumberButton displayStyle = 'numberButton' number = '6' />
        <ActionButton displayStyle = 'actionButton' action = '-' />
      </div>
      <div className = 'row3-5'>
        <NumberButton displayStyle = 'numberButton' number = '1' />
        <NumberButton displayStyle = 'numberButton' number = '2' />
        <NumberButton displayStyle = 'numberButton' number = '3' />
        <ActionButton displayStyle = 'actionButton' action = '+'/>
      </div>
      <div className = 'row6'>
        <NumberButton displayStyle = 'numberButtonBig' number = '0' />
        <ActionButton displayStyle = 'actionButton' action = '='/>
      </div>
    </div>
  );
};

export default App;
