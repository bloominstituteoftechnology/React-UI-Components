import React from 'react';
import './Button.css';

function ActionButton(props) {
    return <button className='action'>{props.action.text}</button>
}
  
export default ActionButton;