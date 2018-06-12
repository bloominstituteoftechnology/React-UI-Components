import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator-container">
  <CalculatorDisplay text="0" />
  <ActionButton actionStyleProp="wide-button" text="clear" />
  <NumberButton numberStyleProp="normal-button math-button" text="&divide;" />
  <NumberButton numberStyleProp="normal-button number-button" text="7" />
  <NumberButton numberStyleProp="normal-button number-button " text="8" />
  <NumberButton numberStyleProp="normal-button number-button" text="9" />
  <NumberButton numberStyleProp="normal-button math-button" text="&times;" />
  <NumberButton numberStyleProp="normal-button number-button" text="4" />
  <NumberButton numberStyleProp="normal-button number-button" text="5" />
  <NumberButton numberStyleProp="normal-button number-button" text="6" />
  <NumberButton numberStyleProp="normal-button math-button" text="&minus;" />
  <NumberButton numberStyleProp="normal-button number-button" text="1" />
  <NumberButton numberStyleProp="normal-button number-button" text="2" />
  <NumberButton numberStyleProp="normal-button number-button" text="3" />
  <NumberButton numberStyleProp="normal-button math-button" text="+" />
  <ActionButton actionStyleProp="wide-button number-button" text="0" />
  <NumberButton numberStyleProp="normal-button math-button" text="=" />

    </div>
  );
};

export default App;
