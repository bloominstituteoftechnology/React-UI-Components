import React from 'react';
import './Button.css';

export const ActionButton = (props) => (
    <div className="action-button" onClick={props.handleClear}>
        {props.children}
    </div>
)