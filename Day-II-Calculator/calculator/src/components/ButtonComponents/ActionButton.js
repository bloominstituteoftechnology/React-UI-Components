import React from 'react';
import './Button.css';
const ActionButtons = (props) => {
    return (
        <div className = {props.displayStyle}>
            {props.text}
        </div>
    )
}

export default ActionButtons