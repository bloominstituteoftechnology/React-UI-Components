import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  return (
    <div className='action-btn'>
      <button>%</button>
      <button>x</button>
      <button>-</button>
      <button>+</button>
      <button>=</button>
    </div>

  )
}

export default ActionButton;