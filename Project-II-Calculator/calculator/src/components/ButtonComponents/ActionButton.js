import React from 'react';
import './Button.css';


const ActionButton = props => {
  return(
    <div className = 'action-button' onClick = {props.function}><span>{props.content}</span></div>
  );
};


export default ActionButton;
