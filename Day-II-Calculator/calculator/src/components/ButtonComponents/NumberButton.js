import React from 'react';
import './Button.css';



const NumButton = props => {
    return (
        <div>
            <button className={props.buttonStyle}>{props.number.number}</button>
        </div>
    );
};

export default NumButton;