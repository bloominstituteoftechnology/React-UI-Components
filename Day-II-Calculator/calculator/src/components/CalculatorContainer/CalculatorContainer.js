import React from 'react';
import TotalBar from '../TotalBar/TotalBar';
import InputKeyPad from '../Keypads/InputKeyPad';
import OperatorKeyPad from '../Keypads/OperatorKeyPad';
import './CalculatorContainer.css';

const CalculatorContainer = () => {
  let total = 0;

  return (
    <div className="CalculatorContainer">
      <TotalBar total={total} />
      <InputKeyPad />
      <OperatorKeyPad />
    </div>
  );
};

export default CalculatorContainer;
