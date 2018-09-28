import React from 'react';
import './Button.css';

const divide = (a, b) => a/b;
const multiply = (a, b) => a*b;
const subtract = (a, b) => a-b;
const add = (a, b) => a+b;

const NumberButton = (props) => {
return (
        <div className={props.style}><h2>{props.text}</h2></div>
    );
};

export default NumberButton;