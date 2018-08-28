import React from 'react';
import './Button.css';

function ActionButton(props) {
  return (
    <button className = {`action-button ${props.type}`}>{props.value}</button>
  );
};

export default ActionButton;
