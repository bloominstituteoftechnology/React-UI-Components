import React from 'react';
import './Button.css';

const NumberButton = props => {
    let className = 'btn num span' + props.num.span
    return (
        <div className={className}>
            <pre>{props.num.value}</pre>
        </div>
    )
}

export default NumberButton