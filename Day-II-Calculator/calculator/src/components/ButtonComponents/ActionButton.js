import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div>{props.action.position}</div>
    );
}
export default ActionButton;