import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <button onClick={props.onClick} className={props.buttonStyle}>
      {props.text}
    </button>
  );
};

export default ActionButton;
