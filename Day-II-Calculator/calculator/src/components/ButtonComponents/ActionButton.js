import React from 'react';
import './Button.css';

const ActionButton = (props)=> {
    return (
        <div className='actionbtn'>
            <h2 className='btntext'>{props.actionText}</h2>
        </div>
    );
}

export default ActionButton;
