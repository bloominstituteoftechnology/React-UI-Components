import React from 'react';
import './Button.css';

const NumberButton = function(props) {
    return (
        <div className="number-button"  onClick={function() { alert('click'); }}>
            <h1>{props.number}</h1>
        </div>
    )
} 

export default NumberButton;