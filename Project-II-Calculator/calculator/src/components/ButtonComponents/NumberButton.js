import React from 'react';
import './Button.css';


const NumberButtons = () => {
    return (
        <div>
            <div className="action-clear-button">Clear</div>
            <div className="number-container-flex">
                <div className="number-container">7</div>
                <div className="number-container">8</div>
                <div className="number-container">9</div>
            </div>
            <div className="number-container-flex">
                <div className="number-container">6</div>
                <div className="number-container">5</div>
                <div className="number-container">4</div>
            </div>
            <div className="number-container-flex">
                <div className="number-container">3</div>
                <div className="number-container">2</div>
                <div className="number-container">1</div>
            </div>
        </div>
    );
};

export default NumberButtons; 