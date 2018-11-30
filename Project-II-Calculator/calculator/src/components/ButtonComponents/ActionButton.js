import React from 'react';
import './Button.css';

const ActionButton = props => {

  return (
    <div class="action-button">{props.buttonAction}</div>
  )
}

export default ActionButton;
