import React from 'react';
import './Button.css';

const NumberButton = props => (
    <div onClick={() => props.click(props.text)} className='num-btn'>{props.text}</div>
);

export default NumberButton;