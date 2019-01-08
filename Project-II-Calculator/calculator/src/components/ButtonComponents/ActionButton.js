import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div 
            className='btn btn-action'
            onClick={props.handleClick}
            data-value={props.dataValue}>
                {props.text}
        </div>);
}

export default ActionButton;