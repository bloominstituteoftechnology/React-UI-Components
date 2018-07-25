import React from 'react';
import './Button.css';

const NumberButton=props=>{
    return (
        <div onClick={this.handleClick} className={props.buttonStyle}>{props.text}</div>
    )
};

export default NumberButton;