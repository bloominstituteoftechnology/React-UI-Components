import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <div className={props.className}>
            {props.value}
        </div>
    )
}

export default NumberButton;