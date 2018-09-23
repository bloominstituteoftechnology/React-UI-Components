import React from 'react';
import './ButtonRow.css';
import ActionButton from './ActionButton.js'
import ButtonStandard from './ButtonStandard.js';

const ButtonRowFour = (props) => {
    return(<div className="btn-row" actionPerformed="{props.name}">
        <ButtonStandard name="divide"/>
        <ButtonStandard name="divide"/>
        <ButtonStandard name="divide"/>
        <ActionButton name="divide"/>
    </div>
    );
};

export default ButtonRowFour;