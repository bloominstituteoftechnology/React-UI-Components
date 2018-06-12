import React from 'react';
import './Button.css';



const NumberButton = () => {
    return (
        <div className = "number-button-container">
            <div className = "non-zero-number-button">
                <span> 1 </span>
                <span> 2 </span>
                <span> 3 </span>
                <span> 4 </span>
                <span> 5 </span>
                <span> 6 </span>
                <span> 7 </span>
                <span> 8 </span>
                <span> 9 </span>
            </div>
            <div className = "zero-number-button">
                <span> 0 </span>
            </div>
        </div>
    );
};

export default NumberButton;
