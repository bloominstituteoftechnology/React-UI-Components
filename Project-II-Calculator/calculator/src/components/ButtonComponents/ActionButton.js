import React from 'react';
import './Button.css';

const ActionButtons = () => {
    return (
        <div className="action">
            <button>&divide;</button>
            <button>&times;</button>
            <button>-</button>
            <button>+</button>
            <button>=</button>
        </div>
    );
}

export default ActionButtons;