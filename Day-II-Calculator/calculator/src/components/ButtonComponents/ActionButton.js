import React from 'react';
import './Button.css';

const ActionButton = (props) => (<button className={`action-${props.type}`}>{props.type}</button>);

export default ActionButton;
