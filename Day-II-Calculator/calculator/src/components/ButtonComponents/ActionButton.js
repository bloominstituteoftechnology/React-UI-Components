import React from 'react';
import './Button.css';


const ActionButton = props => <button className={`btn ${props.class}`}>{props.text}</button>;


export default ActionButton;