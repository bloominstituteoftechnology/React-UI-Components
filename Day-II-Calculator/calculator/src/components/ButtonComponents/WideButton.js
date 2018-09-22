import React from 'react';
import './Button.css';

const WideButton = (props) => {
    return <div className={props.type}>{props.number}</div>
};

export default WideButton;