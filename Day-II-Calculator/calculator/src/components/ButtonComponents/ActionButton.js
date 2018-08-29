import React from 'react';
import './Button.css';

export default function ActionButton(props) {
    function handleOperatorClick() {
        props.handleOperatorClick(props.action);
    }
    return (
        <div className={`${props.cssClass} button`} onClick={handleOperatorClick}>
            <span className="button-span">{props.entity ? props.entity : props.action}</span>
        </div>
    )
}
