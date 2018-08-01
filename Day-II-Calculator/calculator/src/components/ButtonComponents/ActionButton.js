import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className='bar-button'>{props.text}</button>
    );
};

export default ActionButton;