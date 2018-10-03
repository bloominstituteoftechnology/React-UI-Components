import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button className={props.buttonStyle}
                onClick={props.text === 'clear' ? props.onClick : 
                                                ()=> props.onClick(props.text)
                        }
        >
        {props.text}
        </button>
    );
}

export default ActionButton;
