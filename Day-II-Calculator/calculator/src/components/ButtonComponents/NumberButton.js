import React from 'react';
import './Button.css';

const NumberButton = (props) => {
	return (
		<div className={props.className}>
			<h1>{props.number}</h1>
		</div>
	);
};

export default NumberButton;
