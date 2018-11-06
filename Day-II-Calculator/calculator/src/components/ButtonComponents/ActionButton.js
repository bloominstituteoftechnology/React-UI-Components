import React from 'react';
import './Button.css';

const ActionButton = props => {
  return <button className={`numberBtn bgRed`}>{props.text}</button>
}

export default ActionButton;