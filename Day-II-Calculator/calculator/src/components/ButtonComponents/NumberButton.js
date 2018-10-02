import React from 'react';
import './Button.css';

const NumberButton = props => {
	return (
		<div className={props.buttonClass}>
			{props.buttonFor}
		</div>
	);
};

NumberButton.defaultProps= {
	num: 'none',
	blocks: '1',
	buttonFor: 'none',
	buttonClass: 'button'
}

export default NumberButton;