import React from 'react';
import './Button.css';

const NumberButton = (props) => {
	return (
	  <button className = {`default-button ${props.buttonStyles}`}>
	  {props.text}
	  </button>
	)
};
	NumberButton.defaultProps = {
		buttonStyles: 'number-button'
	};

export default NumberButton;

