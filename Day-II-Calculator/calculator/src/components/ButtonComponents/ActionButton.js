import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <button className={`button ${props.buttonStyle}`}>{props.label}</button>
  )
}

export default ActionButton;
