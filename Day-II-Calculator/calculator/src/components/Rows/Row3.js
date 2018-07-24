import React from 'react';
import './Rows.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const Row3 = props => {
    return (
      <div className = "rows">
        <NumberButton text="4"/>
        <NumberButton text="5"/>
        <NumberButton text="6"/>
        <NumberButton text="&#8722;"/>
      </div>
    );
  };

  export default Row3;