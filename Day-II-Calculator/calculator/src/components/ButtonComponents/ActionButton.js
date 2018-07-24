import React from 'react';
import './Button.css';

const ActionButton = (props) => { return <p className={`action-bttn-style-${props.text}`}>{props.text}</p>};



export default ActionButton;