import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const CeroContainer = () => {
    return (
        <div className="cero-container">
            <ActionButton text="0" />
            <NumberButton text="=" />
        </div>
    );
};

export default CeroContainer;