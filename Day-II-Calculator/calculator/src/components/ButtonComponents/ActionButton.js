import React from 'react';
import './Button.css';

const ActionButton = props => (
  <div className={`action-button-${props.name}`}>
    <p>{props.name}</p>
  </div>
);

export default ActionButton;
