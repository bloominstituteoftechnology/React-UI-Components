import React from 'react';
import './Button.css';

const ActionButton = props => (
    <div onClick={props.click} className='act-btn'>{props.text}</div>
);

export default ActionButton;