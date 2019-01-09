import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div className={props.className}>

        <div className="clear">
        <p>{props.text}</p>
        <p>{props.number}</p>
        </div>
            
            {/* <h2>{props.number}</h2> */}
        </div>
    );
};

export default ActionButton;
