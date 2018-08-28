import React from 'react';
import './Button.css';

const ActionButton = (props) => (
<button onClick={() => props.onClick(props.type)} key={props.type} className={`action-${props.type}`}>{props.type}</button>

);

export default ActionButton;
