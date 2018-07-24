import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButtonSmall from './components/ButtonComponents/NumberButton';
import NumberButtonLarge from './components/ButtonComponents/NumberButtonLarge';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator-layout">
      <CalculatorDisplay text="0"/>
      <NumberButtonLarge text="clear" /><ActionButton text="&divide;" />
      <NumberButtonSmall text="7" /><NumberButtonSmall text="8" /><NumberButtonSmall text="9" /><ActionButton text="x" />
      <NumberButtonSmall text="4" /><NumberButtonSmall text="5" /><NumberButtonSmall text="6" /><ActionButton text="-" />
      <NumberButtonSmall text="1" /><NumberButtonSmall text="2" /><NumberButtonSmall text="3" /><ActionButton text="+" />
      <NumberButtonLarge text="0" /><ActionButton text="=" />
    </div>
  );
};

export default App;
