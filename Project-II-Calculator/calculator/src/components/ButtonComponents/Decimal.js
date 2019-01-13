import React from 'react';
import './Button.css';

const Decimal = props => {
    return (
        <div className="decimal" onClick={props.handleInput}>{props.content}</div>
    )
};

export default Decimal;