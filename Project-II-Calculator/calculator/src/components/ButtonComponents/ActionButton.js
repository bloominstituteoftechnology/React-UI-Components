import React from 'react';
import './Button.css';

const ActionButton = props => {
    let className = 'btn oper span' + props.oper.span
    return (
        <div className={className}>
            <pre>{props.oper.value}</pre>
        </div>
    )
}

export default ActionButton