import React from 'react';
import './Button.css';



const ActionButton = props => <button className={`button-styles ${props.CustomStyleProp}`}>{props.text}</button>

export default ActionButton;