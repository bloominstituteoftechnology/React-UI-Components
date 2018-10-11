import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <div className="actionBtn">
     {props.number}
    </div>
  )
}

export default ActionButton;