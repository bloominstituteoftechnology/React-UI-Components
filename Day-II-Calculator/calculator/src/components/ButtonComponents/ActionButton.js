import React from 'react';
import './Button.css';

function ActionButton(props) {
  return (
    <div className={props.className} key={props.keys} onClick={props.handlerButton}>{props.action}</div>
  );
};

export default ActionButton;