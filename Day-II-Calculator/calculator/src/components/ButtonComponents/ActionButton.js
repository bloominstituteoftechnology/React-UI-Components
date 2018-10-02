import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return(
       <button className ={props.actionStyle}>
       {props.signs}
           {props.text}
       </button>
    )
};

export default ActionButton;