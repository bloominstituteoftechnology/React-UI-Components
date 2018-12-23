import React from 'react';
import './Button.css';

const BigButton = props => {
    return (
        <button className="big">{props.content}</button>
    );
};

export default BigButton;