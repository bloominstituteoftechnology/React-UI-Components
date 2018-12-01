import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button className="actButt">
        {props.text}
        </button>
    )
}

export default ActionButton;