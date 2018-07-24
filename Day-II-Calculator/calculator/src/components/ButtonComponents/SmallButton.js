import React from 'react';
import './Button.css';

const SmallButton = props => {
return (
<button className = {`btn-styles`}> {props.text}</button>
);
};

export default SmallButton;