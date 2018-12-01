import React from 'react';
import './Button.css';

const ActionButton = (props) =>{
  return (
    <div className={props.className}>
      <span>{props.value}</span>
    </div>
  );
}

export default ActionButton;
