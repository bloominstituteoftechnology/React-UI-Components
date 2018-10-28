import React from 'react';
import './Display.css';

const Display = props => {
    return (
        <p className='display'>{props.total}</p>
    )
}

export default Display;
