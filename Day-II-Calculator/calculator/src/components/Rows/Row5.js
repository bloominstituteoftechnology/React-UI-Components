import React from 'react';
import './Rows.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const Row1 = props => {
    return (
      <div className = "rows">
        <ActionButton text="0"/>
        <NumberButton text="&#61;"/>
      </div>
    );
  };

  export default Row1;