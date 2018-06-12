import React from 'react';
import './Button.css';

function ActionButton ({action, bold}) {
    return (
        <div className={`action-button ${bold ?? 'bold' : ''}`}>{action}</div>
    )
}

export default ActionButton