import React from 'react';
import './Button.css';

function ActionButton(props) {
  return (
    <div className={props.className}>{props.action}</div>
  );
};

export default ActionButton;