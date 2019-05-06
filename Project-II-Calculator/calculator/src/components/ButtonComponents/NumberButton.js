import React from 'react';
import './Button.css';

function NumberButton(props) {
  return (
    <div className={`${props.className} ${props.className}-${props.number}`} key={`${props.keys}f`} onClick={props.handlerButton} >{props.number}</div>
  );
};

export default NumberButton;
