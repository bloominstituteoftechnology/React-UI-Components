import React from 'react';
import './Button.css';

function NumberButton(props) {
    return <div className="button">
                {props.numbertype} 
            </div>
}

export default NumberButton;