import React from 'react';
import './Button.css';

const OperatorButton = (props) => {
    return (
        <button className={props.buttonStyle} onClick={ () => props.onClick(props.text)}>
            {props.text}
        </button>
    );
}

export default OperatorButton;