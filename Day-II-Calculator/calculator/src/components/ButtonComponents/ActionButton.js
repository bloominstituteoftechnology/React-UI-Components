import React from 'react';
import './Button.css';

const ActionButton = props => {
  return <button className={`big-button ${props.type}`}>{props.value}</button>;
};

export default ActionButton;
