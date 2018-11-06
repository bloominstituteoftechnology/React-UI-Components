import React from 'react';
import './OperatorKeyPad.css';

const OperatorKeyPad = () => {

  return (
    <div className="OperatorKeyPad">
      <button className="OperatorPadButton">&#247;</button>
      <button className="OperatorPadButton">&#215;</button>
      <button className="OperatorPadButton">&#8722;</button>
      <button className="OperatorPadButton">&#43;</button>
      <button className="OperatorPadButton">&#61;</button>
    </div>
  );
};

export default OperatorKeyPad;