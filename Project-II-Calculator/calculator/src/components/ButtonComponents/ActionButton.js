import React from 'react';
import './Button.css';

const ActionButton = props => {
  if (props.size === 'wide') {
    return (
      <button class="action-button wide" id={props.id}>{props.actionType}</button>
    )
  }
  else return (
    <button class="action-button" id={props.id}>{props.actionType}</button>
  )
}

export default ActionButton;
