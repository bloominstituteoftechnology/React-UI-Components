import React from 'react';
import './Button.css';

export default function NumberButton(props) {
    console.log(props)
    return (
        <div className="number-button">
            <span className="button-span">{props.number}</span>
        </div>
    )
}
