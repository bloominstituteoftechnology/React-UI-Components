import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <button className='action-button'><h1>{props.text}</h1></button>
  )
}

export default ActionButton;
