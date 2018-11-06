import React from 'react';
import './Button.css';

const ActionButton = props => <button className={`action-btn-styles ${props.buttonStyle}`}>{props.text}</button>

export default ActionButton;