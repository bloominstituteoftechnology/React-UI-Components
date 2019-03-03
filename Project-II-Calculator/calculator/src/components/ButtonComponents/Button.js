import React from 'react';
import './Button.css';

const Button = props => {
    return (
        <div className={props.className} onClick={() => props.click(props.value)}>
            <pre>{props.value}</pre>
        </div>
    )
}

export default Button