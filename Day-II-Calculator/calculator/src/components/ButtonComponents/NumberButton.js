import React from 'react';
import './Button.css';

// I didn't get what the styling prop was going to be used for so I left it out
const NumberBtns = props =>{
    return(
        <div className="number-container">
            <div className="number-btn">{props.numberbtn}</div>
        </div>
    );
}

export default NumberBtns;
