import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  return (
    <div className="ActionButton">
      <button className={props.buttonStyle}>{props.label}</button>
    </div>
  )
}

export default ActionButton