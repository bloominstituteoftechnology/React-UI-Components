import React from 'react';
import './Button.css';

const NumberButton = props => <button className={`btn-styles ${props.buttonStyle}`}>{props.text}</button>


export default NumberButton