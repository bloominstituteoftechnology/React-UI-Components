import React from 'react';
import './Button.css';


const ActionButton = () => {
    return (
        <div>
            <div className="action-button-position">
                <div className="border">&divide;</div>
                <div className="border multiplication-fix">&#x2715;</div>
                <div className="border">&#x2212;</div>
                <div className="border">&#x2b;</div>
                <div className="border">&#x3d;</div>
            </div>
        </div>
    );
};

export default ActionButton;