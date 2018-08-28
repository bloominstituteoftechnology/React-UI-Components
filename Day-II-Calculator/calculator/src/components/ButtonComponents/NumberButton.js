import React from 'react';
import './Button.css';

const NumberButton = (props) => (<button onClick={() => props.onClick(props.type)} key={props.type} className={`number-${props.type}`}>{props.type}</button>);

export default NumberButton;