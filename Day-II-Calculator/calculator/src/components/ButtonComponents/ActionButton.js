import React from 'react';
import './Button.css';

const ActionButton = props => {
	return (
		<div className={props.buttonClass}>
			{props.buttonFor}
		</div>
	);
};

ActionButton.defaultProps= {
	char: 'none',
	blocks: '1',
	buttonFor: 'none',
	buttonClass: 'button'
}

export default ActionButton;