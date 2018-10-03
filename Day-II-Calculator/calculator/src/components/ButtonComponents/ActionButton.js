import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <button className={`button ${props.buttonStyle}`} value={props.value} onClick={props.onClick}>{props.label}</button>
  )
}

export default ActionButton;
