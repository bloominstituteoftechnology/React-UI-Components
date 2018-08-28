import React from 'react';
import './Button.css';

const MyActionButton = (props) => {
    return (
	<button className={props.buttonStyle}>{props.text}</button>
    );
};

export default MyActionButton;
