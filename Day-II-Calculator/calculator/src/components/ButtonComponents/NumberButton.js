import React from 'react';
import './Button.css';

const NumberButton = props => {
	return (
		<button className={props.btnStyle}>{props.text}</button>
	)
};

NumberButton.defaultProps = {
	text: 'Text'
};

export default NumberButton;