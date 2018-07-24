import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ClearContainer = () => {
    return (
        <div className="clear-container">
            <ActionButton text="clear"/>
            <NumberButton text="÷"/>
        </div>
    );
};

export default ClearContainer;