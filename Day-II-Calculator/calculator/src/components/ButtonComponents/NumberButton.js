import React from 'react';
import './Button.css';

const NumberButtonSmall = props => {
    return (<div className={`small-number ${props.text}`}>
        {props.text}
    </div>)
}

export default NumberButtonSmall;
