import React from 'react';
import './Button.css';

function ActionButton(props) {
  return (
    <button className={`action-button ${props.style}`}>{props.text}</button>
  );
}

export default ActionButton;
