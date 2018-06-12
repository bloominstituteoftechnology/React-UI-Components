import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <button className={`btn ${props.defaultStyle}`}></button>
};

ActionButton.defaultProps = {
    name: "0",
    defaultStyle: "action-btn",
};

export default ActionButton;