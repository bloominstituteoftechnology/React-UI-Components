import React from 'react';
import './Button.css';

const ActionButton = props => {
	return <div className={props.customClass}>{props.value}</div>
	}

export default ActionButton;
