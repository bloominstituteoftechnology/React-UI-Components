import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  return (
    <button className={props.buttonStyle} value={props.id} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default ActionButton;
