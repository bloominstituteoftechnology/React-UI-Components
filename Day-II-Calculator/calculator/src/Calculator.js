import React from 'react';
import './Calculator.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalulatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div class="calculator">
      <CalulatorDisplay></CalulatorDisplay>
      <div class="calc-input">
        <div class="calc-numpad">
          <NumberButton className="calc-wide clear">clear</NumberButton>
          <NumberButton>9</NumberButton>
          <NumberButton>8</NumberButton>
          <NumberButton>7</NumberButton>
          <NumberButton>6</NumberButton>
          <NumberButton>5</NumberButton>
          <NumberButton>4</NumberButton>
          <NumberButton>3</NumberButton>
          <NumberButton>2</NumberButton>
          <NumberButton>1</NumberButton>
          <NumberButton className="calc-wide">0</NumberButton>
        </div>
        <div class="calc-operators">
          <ActionButton>÷</ActionButton>
          <ActionButton>×</ActionButton>
          <ActionButton>-</ActionButton>
          <ActionButton>+</ActionButton>
          <ActionButton>=</ActionButton>
        </div>
      </div>
    </div>
  );
};

export default App;
