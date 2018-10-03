import React from 'react';
import './Button.css';

onst ActionButton = (props) => {
  return (
    <button className={props.buttonStyle}>
      {props.ActionButton.text}
    </button>
  );
};

export default ActionButton;