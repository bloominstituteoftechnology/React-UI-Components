import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <button className={`action-button ${props.type}`}>{props.value}</button>
  );
};

export default ActionButton;
