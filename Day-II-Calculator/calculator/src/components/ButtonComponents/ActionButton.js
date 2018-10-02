import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <button className={`ActionButton key-${props.value}`}>
      {props.value}
    </button>
  )
}

export default ActionButton;