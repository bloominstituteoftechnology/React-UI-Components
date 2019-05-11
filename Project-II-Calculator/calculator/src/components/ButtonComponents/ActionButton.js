import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  return (
    <div className={`btn-large ${props.bgColor}`}>
      {props.text}
    </div>
  )
}

export default ActionButton