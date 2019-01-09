import React from 'react';
import './Button.css';


const NumberButton = props => {
    return (
        <button className={`number-button ${props.name}`}>
        {props.number}
        </button>
      
    )
};

export default NumberButton;