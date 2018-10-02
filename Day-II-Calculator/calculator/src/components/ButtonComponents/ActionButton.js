import React from 'react';
import './Button.css';

const ActionButton = props => {
  return <button className="defaultNumButton actionButton">{props.buttonText}</button>
}

export default ActionButton;