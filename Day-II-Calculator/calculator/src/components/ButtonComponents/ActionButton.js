import React from 'react';
import './Button.css';

const ActionButton = () => {
    return (
        <div className="action-buttons">
            <div className="action-button">÷</div>
            <div className="action-button">×</div>
            <div className="action-button">–</div>
            <div className="action-button">+</div>
            <div className="action-button">=</div>
        </div>
    )
}

export default ActionButton;