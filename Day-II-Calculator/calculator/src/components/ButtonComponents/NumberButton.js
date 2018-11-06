import React from 'react';
import './Button.css';

function NumberButton(props){
    return (
        <div className={props.displayType}> {props.number} </div>
    );
}

export default NumberButton;