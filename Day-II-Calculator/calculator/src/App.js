import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const testButtonInfo = {
  buttonStyle: 'actionButton',
  text: 'Works'
}

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
   
      <div className="input">
        <div className="numsAndClear">
            <ActionButton buttonInfo={testButtonInfo}/>
            <div className="numPad">
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
            </div>
            <ActionButton/>
        </div>
        <div className="operators">
          <ActionButton/>
          <ActionButton/>
          <ActionButton/>
          <ActionButton/>
          <ActionButton/>
        </div>
      </div>
    </div>
  );
};

export default App;
