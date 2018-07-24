import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="AppContainer">
      <CalculatorDisplay />
      <div className="ButtonContainer">
        <ActionButton className="w-75">clear</ActionButton>
        <ActionButton className="w-25 bg-attention">{'\u00f7'}</ActionButton>
        <NumberButton className="w-25">7</NumberButton>
        <NumberButton className="w-25">8</NumberButton>
        <NumberButton className="w-25">9</NumberButton>
        <ActionButton className="w-25 bg-attention">{'\u00d7'}</ActionButton>
        <NumberButton className="w-25">4</NumberButton>
        <NumberButton className="w-25">5</NumberButton>
        <NumberButton className="w-25">6</NumberButton>
        <ActionButton className="w-25 bg-attention">{'\u2014'}</ActionButton>
        <NumberButton className="w-25">1</NumberButton>
        <NumberButton className="w-25">2</NumberButton>
        <NumberButton className="w-25">3</NumberButton>
        <ActionButton className="w-25 bg-attention">+</ActionButton>
        <NumberButton className="w-75">0</NumberButton>
        <ActionButton className="w-25 bg-attention">{'='}</ActionButton>
      </div>
    </div>
  );
};

export default App;
