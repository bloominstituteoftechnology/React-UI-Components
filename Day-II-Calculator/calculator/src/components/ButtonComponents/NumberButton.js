import React from 'react';
import './Button.css';

const NumberButton = props => {
    return <button className={`button-styles ${props.customStyleProp}`}>{props.name}</button>
};

export default NumberButton