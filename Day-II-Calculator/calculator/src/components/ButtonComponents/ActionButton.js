import React from 'react';
import './Button.css';

function ActionButton(props) {
    return(
    <button className={props.style}>{props.text}</button>
    )
}


export default ActionButton;