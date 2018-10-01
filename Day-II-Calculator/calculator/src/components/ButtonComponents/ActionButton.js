import React from 'react';
import './Button.css';

const ActionButton = () => {
    return (
        <div className="actionKeys">
            <div className="actionButton" data-act="divide">&#247;</div>
            <div className="actionButton" data-act="mult">X</div>
            <div className="actionButton" data-act="sub">-</div>
            <div className="actionButton" data-act="add">+</div>
            <div className="actionButton" data-act="equals">=</div>
        </div>
    )
}

export default ActionButton;