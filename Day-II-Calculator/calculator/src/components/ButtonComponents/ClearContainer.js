import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ClearContainer = () => {
    return (
        <div className="clear-container">
            <ActionButton buttonStyle="action-text" text="clear"/>
            <NumberButton buttonStyle="red-button" text="÷"/>
        </div>
    );
};

export default ClearContainer;