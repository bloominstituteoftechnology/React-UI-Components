import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button className='btn width3'>{props.text}</button>
    );
};

export default ActionButton;