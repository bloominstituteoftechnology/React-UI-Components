import React from 'react';
import './Button.css';

const ActionButton = props => {
	return (
		<button className={`action-btn`}>{props.input}</button>
	)
};

ActionButton.defaultProps = {
	input: 'Input'
};

export default ActionButton;