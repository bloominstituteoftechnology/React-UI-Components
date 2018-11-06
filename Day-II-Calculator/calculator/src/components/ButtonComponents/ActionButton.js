import React from 'react';
import './Button.css';

function ActionButton(props){
    return(
        <button className={props.btn.buttonStyle}>{props.btn.text}</button>
    )
}

export default ActionButton;