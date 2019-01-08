import React from 'react';
import './Button.css';


const NumberButton = props => {
    return (
    <div 
        className={props.className}
        onClick={props.handleClick}
        data-value={props.dataValue}>
        {props.text}
    </div>);
}

export default NumberButton;