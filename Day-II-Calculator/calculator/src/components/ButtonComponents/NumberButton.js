import React from 'react';
import './Button.css';


const NumberButton = props => {
	return <button className = {`basicButtonStyles  ${props.buttonStyles}`}> {props.name} </button>;
}

NumberButton.defaultProps = {
	buttonStyles : "white",

}

export default NumberButton;