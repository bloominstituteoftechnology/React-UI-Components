import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <button className={`three-quarter-button ${props.className}`}>
      {props.text}
    </button>
  );
};

export default ActionButton;
