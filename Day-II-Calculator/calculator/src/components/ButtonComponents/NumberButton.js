import React from 'react';
import './Button.css';

const NumberButton = (props) => {
	return (
	  <button className={`buttonStyles ${props.buttonStyles}`}>
	  {props.text}
	  </button>
	)
}

export default NumberButton;
