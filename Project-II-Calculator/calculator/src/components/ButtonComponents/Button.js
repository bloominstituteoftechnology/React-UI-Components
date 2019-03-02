import React from 'react';
import './Button.css';

const Button = props => {
    return (
        <div className={props.class} onClick={() => props.click(props.value)}>
            <pre>{props.value}</pre>
        </div>
    )
}

export default Button