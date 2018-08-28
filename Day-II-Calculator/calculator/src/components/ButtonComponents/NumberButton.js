import React from 'react';
import './Button.css';

const NumberButton = (props) => (<button className={`number-${props.type}`}>{props.type}</button>);

export default NumberButton;