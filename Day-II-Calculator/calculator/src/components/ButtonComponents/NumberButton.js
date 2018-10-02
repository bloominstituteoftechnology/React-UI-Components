import React from 'react';
import './Button.css';

function NumberButton(props) {
  return <div className="button number">{props.button.text}</div>;
}

export default NumberButton;
