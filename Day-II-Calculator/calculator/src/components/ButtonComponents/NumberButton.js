import React from 'react';
import './Button.css';

const NumberButton = props => {
	return <div className={props.customClass}>{props.value}</div>;
	}

export default NumberButton;
