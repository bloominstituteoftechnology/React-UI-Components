import React from 'react';
import './Button.css';

const ActionButton = props => {
  return <button class="defaultNumButton actionButton">{props.buttonText}</button>
}

export default ActionButton;