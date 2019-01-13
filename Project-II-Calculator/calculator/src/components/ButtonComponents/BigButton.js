import React from 'react';
import './Button.css';

const BigButton = props => {
    if (props.content === 'clear') {
        return (
            <div className="big-button" onClick={props.clearDisplay}>{props.content}</div>
        )
    }
    return (
        <div className="big-button zero" onClick={props.handleInput}>{props.content}</div>
    );
};

export default BigButton;