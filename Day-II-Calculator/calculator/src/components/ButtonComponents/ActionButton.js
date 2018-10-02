import React from 'react';
import './Button.css';

const ActionButtons = props =>{
    return(
        <div className="action-btn-container">
            <div className="symbols">
                <div className="action-btn">%</div>
                <div className="action-btn">x</div>
                <div className="action-btn">-</div>
                <div className="action-btn">+</div>
                <div className="action-btn">=</div>
            </div>
        </div>
    )
}

export default ActionButtons; 
