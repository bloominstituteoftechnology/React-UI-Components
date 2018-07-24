import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={`number-content ${props.sign}`}> {props.number} </button>
    );
};



export default NumberButton;
