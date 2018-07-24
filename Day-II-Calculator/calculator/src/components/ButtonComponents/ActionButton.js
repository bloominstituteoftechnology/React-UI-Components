import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className="action-buttons">
            <button className={props.buttonStyle}>{props.text}</button>
        </div>

    )
};

export default ActionButton;