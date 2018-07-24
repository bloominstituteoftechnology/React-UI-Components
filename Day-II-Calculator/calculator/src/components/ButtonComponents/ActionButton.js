import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
    <button className = {`clear ${props.className}`}> {props.text} </button>
    );
};

export default ActionButton;