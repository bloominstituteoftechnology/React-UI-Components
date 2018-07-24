import React from 'react';
import './Rows.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const Row2 = props => {
    return (
      <div className = "rows">
        <NumberButton text="7"/>
        <NumberButton text="8"/>
        <NumberButton text="9"/>
        <NumberButton text="&#215;"/>
      </div>
    );
  };

  export default Row2;