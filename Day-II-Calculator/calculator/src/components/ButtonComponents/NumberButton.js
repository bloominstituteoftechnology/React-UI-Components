import React from 'react';
import './Button.css';

const NumberBtns = props =>{
    return(
        <div className="number-container">
            <div className="number-btn">9</div>
            <div className="number-btn">8</div>
            <div className="number-btn">7</div>
            <div className="number-btn">6</div>
            <div className="number-btn">5</div>
            <div className="number-btn">4</div>
            <div className="number-btn">3</div>
            <div className="number-btn">2</div>
            <div className="number-btn">1</div>
            <div className="number-btn">0</div>
        </div>
    )
}

export default NumberBtns;
