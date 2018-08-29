import React from 'react';
import './Button.css';

export default function NumberButton(props) {
    function handleNumberClick() {
        props.handleNumberClick(props.number);
    }
    return (
        <div className="number-button" onClick={handleNumberClick}>
            <span className="button-span">{props.number}</span>
        </div>
    )
}
