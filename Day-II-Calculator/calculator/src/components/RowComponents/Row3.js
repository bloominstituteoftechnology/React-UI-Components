import React from 'react';
import './Row.css';
import NumberButton from '../ButtonComponents/NumberButton'

const Row3 = () => {
  return (
    <div className="Row3">
      <NumberButton buttonStyle="small number" label="7" />
      <NumberButton buttonStyle="small number" label="8" />
      <NumberButton buttonStyle="small number" label="9" />
      <NumberButton buttonStyle="small operation maroon" label="x" />
    </div>
  );
};

export default Row3
