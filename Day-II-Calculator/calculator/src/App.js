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
          <NumberButton type="wide-button" value="clear" />
          <ActionButton type="danger-button" value="&#247;" />
        </div>

        <div className="button-wrap">
          <NumberButton type="number-button" value="7" />
          <NumberButton type="number-button" value="8" />
          <NumberButton type="number-button" value="9" />
          <ActionButton type="danger-button" value="&#215;" />
        </div>

        <div className="button-wrap">
          <NumberButton type="number-button" value="4" />
          <NumberButton type="number-button" value="5" />
          <NumberButton type="number-button" value="6" />
          <ActionButton type="danger-button" value="&#8722;" />
        </div>

        <div className="button-wrap">
          <NumberButton type="number-button" value="1" />
          <NumberButton type="number-button" value="2" />
          <NumberButton type="number-button" value="3" />
          <ActionButton type="danger-button" value="&#x2b;" />
        </div>

        <div className="button-wrap">
          <NumberButton type="wide-button number-button" value="0" />
          <ActionButton type="danger-button" value="&#x3d;" />
        </div>
      </div>
    </div>
  );
};

export default App;
