import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  return (
    <div className={`${props.buttonStyle} btn-sm button-display`}>
      <button className={"action-btn bordered button-display"}>{props.action}</button>
    </div>
  )
}

export default ActionButton;
