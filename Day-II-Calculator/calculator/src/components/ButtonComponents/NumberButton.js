import React from 'react';
import './Button.css';

const NumberButton = ({text=0}) => {
    return (
        <div className='button number-button'>
            {text}
        </div>
    );
}

export default NumberButton;