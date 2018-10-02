import React from 'react';
import './Button.css';

const ActionButtons = props =>{
    return(
        <div className="action-btn-container">
            <div className="action-btn">%</div>
            <div className="action-btn">X</div>
            <div className="action-btn">-</div>
            <div className="action-btn">+</div>
            <div className="action-btn">=</div>
        </div>
    )
}

export default ActionButtons; 
