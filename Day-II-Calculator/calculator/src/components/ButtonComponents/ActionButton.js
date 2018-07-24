import React from 'react';
import './Button.css';


const ActionButton = props => {
  return (
    <div className={`btn ${props.custom} ${props.weight}`}>{props.content}</div>
  );
};

export default ActionButton;