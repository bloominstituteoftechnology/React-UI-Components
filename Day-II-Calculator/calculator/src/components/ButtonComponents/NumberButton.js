import React from 'react';
import './Button.css';

const NumberButton = props => 
    <button className={`btn ${props.buttonStyle}`} value={props.value} onClick={props.handleClick}> {props.text}</button>;

export default NumberButton

