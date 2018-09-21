import React from 'react';
import './Button.css';

//clear and zero buttons

const LongButton = (props) =>{
    return (
        <button className={props.buttonStyle}>          {props.text}
        </button>
    )
};

export default LongButton;