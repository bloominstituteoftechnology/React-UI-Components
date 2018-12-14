import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <button className={`large ${props.className}`}>{props.text}</button>
  )
}

export default ActionButton;
