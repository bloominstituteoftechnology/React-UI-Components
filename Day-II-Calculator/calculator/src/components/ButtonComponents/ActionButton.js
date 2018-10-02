import React from 'react';
import './Button.css';


const Actionbutton = (props) => {
    return (
        <div className={props.buttonStyle}>
        {props.action}
        </div>
    )
}

export default Actionbutton;