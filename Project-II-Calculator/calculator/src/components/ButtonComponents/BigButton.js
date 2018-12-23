import React from 'react';
import './Button.css';

const BigButton = props => {
    return (
        <div className="big-button">{props.content}</div>
    );
};

export default BigButton;