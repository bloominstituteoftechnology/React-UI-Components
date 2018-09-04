import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <div>
      <button className={`action-button ${props.bgColor}`}>{props.text}</button>
    </div>
  );
};

export default ActionButton;
