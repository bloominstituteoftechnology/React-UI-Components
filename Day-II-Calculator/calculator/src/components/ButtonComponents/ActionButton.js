import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div class='action-buttons'>
            <p class='action'>/</p>
            <p class='action'>x</p>
            <p class='action'>+</p>
            <p class='action'>-</p>
            <p class='action'>=</p>
        </div>
    )
};

export default ActionButton;