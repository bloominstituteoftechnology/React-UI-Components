import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className='btn'>{props.value}</div>
    )
}

export default NumberButton