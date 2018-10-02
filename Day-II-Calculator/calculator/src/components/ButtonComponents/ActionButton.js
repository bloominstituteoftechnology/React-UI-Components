import React from 'react';
import './Button.css';

const ActionButton = props => <div className="actionBtn" onClick={props.func}>{props.text}</div>;

export default ActionButton;