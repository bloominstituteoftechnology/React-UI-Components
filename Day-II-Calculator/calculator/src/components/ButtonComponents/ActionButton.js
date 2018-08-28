import React from 'react';
import './Button.css';

const RedButton = (props) => {
    return (
        <div className={`calculator-button red-action ${props.type}`}>{`${props.text}`}</div>
    );
}

export default RedButton;