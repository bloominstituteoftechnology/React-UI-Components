import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <div className={props.button.style}>
      {props.button.text}
    </div>
  );
}

export default ActionButton;