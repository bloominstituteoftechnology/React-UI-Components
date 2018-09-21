import React from 'react';
import './Display.css';

//cal display

const CalDisplay = (props) => {
    return(
        <div className={props.displayStyle}>
            {props.text}
        </div>
    )
};

export default CalDisplay;