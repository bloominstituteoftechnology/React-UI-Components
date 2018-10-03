import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <button onClick={props.onClick} className={`three-quarter-button ${props.className}`}>
      {props.text}
    </button>
  );
};

export default ActionButton;
