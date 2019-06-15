import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return <button props.buttonStyle>{props.text}</button>;
};

export default ActionButton