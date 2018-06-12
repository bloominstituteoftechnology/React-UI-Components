import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    console.log('PROPS', props);
    return <button className={`number ${props.customStyleProp}`}>{props.name}</button>;
}

export default NumberButton;