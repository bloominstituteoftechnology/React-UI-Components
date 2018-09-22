import React from 'react';
import './Button.css';

const SquareButton = (props) => {
    return <div className={props.type}>{props.number}{props.action}</div>
};

export default SquareButton;