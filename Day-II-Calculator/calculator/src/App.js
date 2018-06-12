import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className = "calculator">
      <CalculatorDisplay />
      <ActionButton customStyleProp="long-button" name="clear" />
      <ActionButton customStyleProp="symbol-button" name="&divide;" />
      <ActionButton customStyleProp="number-button" name="7" />
      <ActionButton customStyleProp="number-button" name="8" />
      <ActionButton customStyleProp="number-button" name="9" />
      <ActionButton customStyleProp="symbol-button" name="x" />
      <ActionButton customStyleProp="number-button" name="4" />
      <ActionButton customStyleProp="number-button" name="5" />
      <ActionButton customStyleProp="number-button" name="6" />
      <ActionButton customStyleProp="symbol-button" name="-" />
      <ActionButton customStyleProp="number-button" name="1" />
      <ActionButton customStyleProp="number-button" name="2" />
      <ActionButton customStyleProp="number-button" name="3" />
      <ActionButton customStyleProp="symbol-button" name="+" />
      <ActionButton customStyleProp="long-button" name="0" />
      <ActionButton customStyleProp="symbol-button" name="=" />
    </div>
  );
};

export default App;
