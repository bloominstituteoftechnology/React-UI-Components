import React from 'react';
import './Rows.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const Row4 = props => {
    return (
      <div className = "rows">
        <NumberButton text="1"/>
        <NumberButton text="2"/>
        <NumberButton text="3"/>
        <NumberButton text="&#43;"/>
      </div>
    );
  };

  export default Row4;