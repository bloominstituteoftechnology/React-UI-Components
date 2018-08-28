import React from 'react';
import './Button.css';

const MyNumberButton = (props) => {
    return (
	<button className={props.buttonStyle}>{props.text}</button>
    );
};

export default MyNumberButton;
