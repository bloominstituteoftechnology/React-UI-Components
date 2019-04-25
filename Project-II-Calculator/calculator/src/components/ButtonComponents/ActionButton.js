import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  return (
    <div className="ActionButton">
      <span className={props.buttonStyle}>{props.label}</span>
    </div>
  )
}

export default ActionButton
