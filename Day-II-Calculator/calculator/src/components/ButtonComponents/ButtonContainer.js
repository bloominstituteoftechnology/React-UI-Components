import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonContainer = () =>{
    return (
        <div className="button-container">
            <ActionButton />
            <NumberButton />
        </div>
    );
}

export default ButtonContainer;