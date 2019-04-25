import React from 'react';
import './Row.css';
import NumberButton from '../ButtonComponents/NumberButton'

const Row4 = () => {
return (
<div className="Row4">
  <NumberButton buttonStyle="number" label="4" />
  <NumberButton buttonStyle="number" label="5" />
  <NumberButton buttonStyle="number" label="6" />
  <NumberButton buttonStyle="operation" label="-" />
</div>
);
};

export default Row4
