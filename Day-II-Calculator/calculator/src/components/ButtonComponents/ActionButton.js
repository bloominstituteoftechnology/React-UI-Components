import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
   
    <button className= {props.actionProp}>{props.text}</button>
  
    );
};

export default ActionButton;
