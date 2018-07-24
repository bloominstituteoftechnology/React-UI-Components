import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    console.log('PROPS', props);
    return <button className={`number ${props.buttonStyle}`}>{props.name}</button>;
}

export default NumberButton;