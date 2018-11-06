import React from 'react';
import './Button.css';

function ActionButton(props){
    return <div className='action-button'>{props.number}</div>
};

export default ActionButton;