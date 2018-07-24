import React from 'react';
import './Button.css';
const ActionButton =  props => {
  return (
      <button className={`number-content ${props.BigContent}`}> {props.number} </button>
  );
};



export default ActionButton;