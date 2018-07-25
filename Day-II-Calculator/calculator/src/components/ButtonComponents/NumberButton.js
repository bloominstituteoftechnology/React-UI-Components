import React from 'react';
import './Button.css';


const Button = props => <button className={`btn ${props.class}`}>{props.text}</button>;


export default Button;