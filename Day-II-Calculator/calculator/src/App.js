import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NormalButton from './components/ButtonComponents/NormalButton';

const App = () => {
  return (
    <div className="container-wrapper">
      <CalculatorDisplay />
      <div className="button-container">
        <NormalButton className="clear-text three-quarter number-button" text="clear" />
        <NormalButton className="action-button" text="&#xf7;" />
      </div>
      <div className="button-container">
        <NormalButton className="number-button" text="7" />
        <NormalButton className="number-button" text="8" />
        <NormalButton className="number-button" text="9" />
        <NormalButton className="action-button" text="&#xd7;" />
      </div>
      <div className="button-container">
        <NormalButton className="number-button" text="4" />
        <NormalButton className="number-button" text="5" />
        <NormalButton className="number-button" text="6" />
        <NormalButton className="action-button" text="&#x2212;" />
      </div>
      <div className="button-container">
        <NormalButton className="number-button" text="1" />
        <NormalButton className="number-button" text="2" />
        <NormalButton className="number-button" text="3" />
        <NormalButton className="action-button" text="&#x2b;" />
      </div>
      <div className="button-container">
        <NormalButton className="three-quarter number-button" text="0"/>
        <NormalButton className="action-button" text="&#x3d;" />
      </div>
    </div>
  );
};

export default App;
