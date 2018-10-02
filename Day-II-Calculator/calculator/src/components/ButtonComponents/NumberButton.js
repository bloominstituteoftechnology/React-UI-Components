import React from 'react';
import './Button.css';

const NumberBtns = props =>{
    return(
        <div className="number-container">
            <div className="number-btn">{props.numberbtn}</div>
        </div>
    );
}

export default NumberBtns;
