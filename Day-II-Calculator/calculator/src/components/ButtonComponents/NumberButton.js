import React from 'react';
import './Button.css';
const NumberButtons= (props) => {
    return (
        <div className={props.displayStyle}>
            {props.text}
        </div>
    )
}
export default NumberButtons