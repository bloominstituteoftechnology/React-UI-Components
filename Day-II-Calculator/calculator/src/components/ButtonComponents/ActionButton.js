import React from 'react';
import './Button.css';




const ActionButton = props => {
  return (
    <button 
    className={`key-${props.value} ActionButton`}
    >
      {props.value}
    </button>
  )
}

export default ActionButton;