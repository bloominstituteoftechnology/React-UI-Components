import React from 'react';
import './Button.css';

function NumberButton (props){
    return(
        <div className={props.class}>{props.text}</div>
    );
}

export default NumberButton;