import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <div className='num-button'>
            {props.text}
        </div>
    );
}

export default NumberButton;