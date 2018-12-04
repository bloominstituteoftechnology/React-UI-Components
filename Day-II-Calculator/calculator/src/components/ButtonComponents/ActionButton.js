import React from 'react';
import './Button.css';

const ActionButton = (props) => {
	return (
		<div className={props.className}>
			<h1 mustafa={props.mustafa}>{props.text}</h1>
		</div>
	);
};
export default ActionButton;
