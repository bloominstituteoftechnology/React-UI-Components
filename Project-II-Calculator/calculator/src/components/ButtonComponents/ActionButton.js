import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <button className={`num-btn ${props.buttonStyle}`}>{props.type}</button>
  );
};


export default ActionButton;