import React from 'react';
import './Button.css';

function ActionButton(props){
    return(
        <div className={props.class}>{props.text}</div>
    );
}

export default ActionButton;
