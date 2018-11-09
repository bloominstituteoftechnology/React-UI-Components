import React from 'react';

function ActionButton(props) {
	let className = 'function';
	if (props.large) {
		className += ' large';
	}
	return (
		<button className={className}>{props.label}</button>
	);
}

export default ActionButton;