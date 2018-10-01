import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

const NumberButton = props => {
    return <button className={`number ${props.custom}`}>{props.text}</button>
}

export default NumberButton