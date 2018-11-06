import React from 'react';
import './Button.css';


const ActionButton = props => {
    return (
        <div className='action'>
            <i className={props.operator.class}></i>
        </div>
    );
}

export default ActionButton;