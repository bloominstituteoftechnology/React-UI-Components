import React from 'react';
import './Button.css';


const NumberButton = props => <button className={`btn ${props.class}`}>{props.text}</button>;


export default NumberButton;