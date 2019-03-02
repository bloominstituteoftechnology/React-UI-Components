import React from 'react';
import './Button.css';

const Button = props => {
    let className = props.btn.class
    return (
        <div className={className}>
            <pre>{props.btn.value}</pre>
        </div>
    )
}

export default Button