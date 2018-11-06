import React from 'react';
import InputKeyPad from './InputKeyPad';
import OperatorKeyPad from './OperatorKeyPad';
import './KeyPad.css';

const KeyPad = () => {
  return (
    <div className="KeyPad">
      <InputKeyPad />
      <OperatorKeyPad />
    </div>
  );
};

export default KeyPad;