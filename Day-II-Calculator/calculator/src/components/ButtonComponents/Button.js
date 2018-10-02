import React from 'react';
import './Button.css';

const Button = props => {
    return (
        <a className={props.cName}>{props.text}</a>
    )
}

export default Button;