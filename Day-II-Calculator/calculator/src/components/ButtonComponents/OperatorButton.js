import React from 'react';
import './Button.css';

function OperatorButton(props) {
  return <div className="button operator">{props.button.text}</div>;
}

export default OperatorButton;
