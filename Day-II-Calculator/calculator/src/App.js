import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="app">
    <CalculatorDisplay />
    <ActionButton customStyleProp="action-button clear-style" name="clear" />
    <NumberButton customStyleProp="operator" name="&divide;" />
    <NumberButton customStyleProp="number" name="7" />
    <NumberButton customStyleProp="number" name="8" />
    <NumberButton customStyleProp="number" name="9" />
    <NumberButton customStyleProp="operator" name="&times;" />
    <NumberButton customStyleProp="number" name="4" />
    <NumberButton customStyleProp="number" name="5" />
    <NumberButton customStyleProp="number" name="6" />
    <NumberButton customStyleProp="operator" name="&minus;" />
    <NumberButton customStyleProp="number" name="1" />
    <NumberButton customStyleProp="number" name="2" />
    <NumberButton customStyleProp="number" name="3" />
    <NumberButton customStyleProp="operator" name="&#43;" />
    <ActionButton customStyleProp="action-button zero-style" name="0" />
    <NumberButton customStyleProp="operator" name="&#61;" />
    </div>
  );
};

export default App;
