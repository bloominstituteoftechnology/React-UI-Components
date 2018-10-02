import React from 'react';
import './Button.css';

const NumberButton = ({value=0}) => {
    return (
        <div>
            {value}
        </div>
    );
}

export default NumberButton;