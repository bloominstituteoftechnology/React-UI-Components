import React from 'react';
import './Button.css';

const ActionButton = props => 
    <button className={`btn ${props.buttonStyle}`} value={`${props.value}`} onClick={props.handleClick}> {props.text}</button>;

export default ActionButton