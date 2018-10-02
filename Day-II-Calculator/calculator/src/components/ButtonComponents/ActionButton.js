import React from 'react';
import './Button.css';

function ActionButton(props) {
    return <button className={props.action.buttonStyle}>{props.action.text}</button>
}
  
export default ActionButton;