import React from 'react';
import './Button.css';

const ActionButton = props => {
  return <button class="actionButton">{props.buttonText}</button>
}

export default ActionButton;