import React from 'react';
import './Button.css';

function ActionButtons(props) {
  return (
    <div className='action-buttons'>
      {props.name}
    </div>
  )
}

export default ActionButtons;
