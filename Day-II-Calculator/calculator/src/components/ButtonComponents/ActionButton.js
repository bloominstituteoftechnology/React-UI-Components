import React from 'react';
import './Button.css';

export default function ActionButton(props) {
    return (
        <div className={`${props.cssClass} button`}>
            <span className="button-span">{props.entity ? props.entity : props.action}</span>
        </div>
    )
}
