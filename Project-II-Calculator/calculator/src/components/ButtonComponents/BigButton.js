import React from 'react';
import './Button.css';

const BigButton = props => {
    return (
        <button className="big-button">{props.content}</button>
    );
};

export default BigButton;