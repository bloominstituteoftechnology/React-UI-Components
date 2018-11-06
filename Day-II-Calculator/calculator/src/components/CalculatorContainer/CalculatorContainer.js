import React from 'react';
import TotalBar from '../TotalBar/TotalBar';
import KeyPad from '../Keypads/KeyPad';
import './CalculatorContainer.css';

const CalculatorContainer = () => {
  let total = 0;

  return (
    <div className="CalculatorContainer">
      <TotalBar total={total} />
      <KeyPad />
    </div>
  );
};

export default CalculatorContainer;
