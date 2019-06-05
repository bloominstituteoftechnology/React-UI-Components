import React from 'react';
import './Button.css';

function ActionButton (props) {
    return (
        <div className="action-button">
            <button className={`three-box-space ${props.className}`}>{props.text}</button> 
        </div>
    );
}

export default ActionButton;
