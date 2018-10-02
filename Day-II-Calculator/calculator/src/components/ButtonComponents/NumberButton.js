import React from 'react';
import './Button.css';

const NumberButton = props => { 
    return (
        <div className = 'numberButton'>
            <button className={props.number.type}>{props.number.number}</button>
        </div>
    );
}

export default NumberButton;

