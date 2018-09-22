import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button className = {props.style}>
            {props.text}
        </button>
    );
}

ActionButton.defaultProps = {
    text: "Enter Number Text",
    style: "display",
}

export default ActionButton;