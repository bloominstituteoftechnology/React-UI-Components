import React from 'react';
import './Button.css';
import BigButton from './BigButton';

const bigButtons = ['clear', '0']
const numberButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];

const ButtonContainer = props => {
    return (
        <div className="button-container">
            <div className="numbers">
                <BigButton content={bigButtons[0]} />
            
            </div>
            <div className="actions">
            
            </div>
        </div>
    );
};

export default ButtonContainer;