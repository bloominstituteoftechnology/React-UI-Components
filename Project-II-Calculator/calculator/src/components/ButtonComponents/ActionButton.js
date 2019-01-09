import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div className="action-button"  onClick={function() { alert('click'); }}>
            <h1>{props.action}</h1>
        </div>
    )
};

export default ActionButton;