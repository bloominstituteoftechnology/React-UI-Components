import React from 'react';
import './ButtonRow.css';
import ActionButton from './ActionButton.js'
import ActionButtonLarge from './ButtonLarge';

const ButtonRowTwo = () => {
    return(<div className="btn-row">
        <ActionButtonLarge name="clear"/>
        <ActionButton name="divide"/>
    </div>
    );
};

export default ButtonRowTwo;