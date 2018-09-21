import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    // Uses two props 
    // - label: display on button
    // - type: change style based on type
    // -      act-digit (default) or act-clear
    return(
        <div className="action">{props.label}</div>
    );
};
ActionButton.defaultProps = { type: "act-digit" };

export default ActionButton;
