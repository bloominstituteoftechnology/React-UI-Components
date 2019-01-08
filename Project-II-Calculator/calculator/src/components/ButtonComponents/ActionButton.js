import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  return (
    <button className={props.ClearButton.buttonStyle}>{props.ClearButton.text}</button>
  );
}

export default ActionButton;