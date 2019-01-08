import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <div className='btn btn-action'>{props.text}</div>;
}

export default ActionButton;