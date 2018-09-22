import React from 'react';
import './NumPad.css';
import Numbers from './NumberButton.js';
import ActionButton from './ActionButton.js';

const NumPad = () => {
    return (
        <div className="number-pad">
            <Numbers />
            <ActionButton />
        </div>
    );
}

export default NumPad;