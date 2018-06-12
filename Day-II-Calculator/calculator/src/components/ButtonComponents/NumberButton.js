import React from 'react';
import './Button.css';

const NumberButton = props => {
    return <button className={props.customStyleProp}>{props.name}</button>;
};

export default NumberButton;