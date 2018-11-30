import React from 'react';
import './CalculatorContainer.css';
import NumberButton from '../ButtonComponents/NumberButton.js';

const CalculatorContainer = props => {
  return (
    <div className="container">
      <div className="container__row">
        <NumberButton text="1"/>
        <NumberButton text="2"/>
        <NumberButton text="3"/>
        <NumberButton text="&#xd7;" styles="operator"/>
      </div>
      <div className="container__row">
        <NumberButton text="4"/>
        <NumberButton text="5"/>
        <NumberButton text="6"/>
        <NumberButton text="&#x2212;" styles="operator"/>
      </div>
      <div className="container__row">
        <NumberButton text="7"/>
        <NumberButton text="8"/>
        <NumberButton text="9"/>
        <NumberButton text="&#x2b;" styles="operator"/>
      </div>
    </div>
  );
}

export default CalculatorContainer;
