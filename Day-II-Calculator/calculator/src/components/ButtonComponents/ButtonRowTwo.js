import React from 'react';
import './Button.css';
import ActionButton from './ActionButton.js'
import ActionButtonLarge from './ActionButtonLarge.js';

const ButtonRowTwo = () => {
    return(<div className="btn-row-main">
        <ActionButtonLarge name="clear"/>
        <ActionButton name="divide"/>
    </div>
    );
};

export default ButtonRowTwo;