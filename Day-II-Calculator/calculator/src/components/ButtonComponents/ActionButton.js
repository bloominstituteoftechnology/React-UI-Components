import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
        <div className="action-button-component">
            <button className={props.classNames}>{props.text}</button>
        </div>
    );
}

export default ActionButton;
