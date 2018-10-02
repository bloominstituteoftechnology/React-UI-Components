import React from 'react';
import './Button.css';

const NumberButton = ({text = 0, style, click}) => {
    return (
        <div 
            className='button number-button' 
            style={style}
            onClick={click.bind(this, text)}
        >
            {text}
        </div>
    );
}

export default NumberButton;