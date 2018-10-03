import React from 'react';
import './Button.css';

const NumberButton = (props) => {

    return (
        <button className={props.buttonStyle} 
                onClick={ 
                    props.name === 'equals' ?
                        () => props.onClick(props.operand1, props.operand2, props.aO)
                    :
                    
                    props.op ? () => props.onClick(props.op) : ()=> props.onClick(props.text)
                    
                }
                >
        {props.text}
        </button>
    );

}

export default NumberButton;

/* NumberButton.defaultProps = {
    buttonStyles: 'defaultStyles'
} */