import React from 'react';
import './Button.css';

const NumberButton = props => { 
    return (
            <button className=  {props.number.font + ' ' +props.number.type}>{props.number.number}</button>
    );
}

export default NumberButton;

