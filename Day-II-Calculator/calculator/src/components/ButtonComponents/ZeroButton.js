import React from 'react';
import './Button.css';

const ZeroButton = (props) => {
	return (
		<button className={props.buttonStyle}>
			{props.text}
		</button>
	)
}

export default ZeroButton;