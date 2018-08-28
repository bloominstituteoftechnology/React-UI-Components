import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import './App.css';

const App = () => {
  return (
    <div className="main-wrap">
      <div className="inner-wrap">
        <CalculatorDisplay />
        <div className="button-wrap">
          <ActionButton type="wide-button" value="clear" />
          <NumberButton type="danger-button" value="/" />
        </div>

        <div className="button-wrap">
          <NumberButton type="number-button" value="7" />
          <NumberButton type="number-button" value="8" />
          <NumberButton type="number-button" value="9" />
          <ActionButton type="danger-button" value="X" />
        </div>

        <div className="button-wrap">
          <NumberButton type="number-button" value="4" />
          <NumberButton type="number-button" value="5" />
          <NumberButton type="number-button" value="6" />
          <ActionButton type="danger-button" value="-" />
        </div>

        <div className="button-wrap">
          <NumberButton type="number-button" value="1" />
          <NumberButton type="number-button" value="2" />
          <NumberButton type="number-button" value="3" />
          <ActionButton type="danger-button" value="+" />
        </div>

        <div className="button-wrap">
          <NumberButton type="wide-button number-button" value="0" />
          <ActionButton type="danger-button" value="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
