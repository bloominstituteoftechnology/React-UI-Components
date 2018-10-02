import React from 'react';
import './Button.css';

function ActionButton(props) {
  return <div className="button action">{props.button.text}</div>;
}

export default ActionButton;
