import React from 'react';
import './ButtonRow.css';
import ActionButton from './ActionButton.js'
import ButtonStandard from './ButtonStandard.js';

const ButtonRowFour = (props) => {
    const buttonOneName = props.one;
    const buttonTwoName = props.two;
    const buttonThreeName = props.three;
    const buttonAction = props.action;
    return(<div className="btn-row" actionPerformed="{props.name}">
        <ButtonStandard name={buttonOneName} />
        <ButtonStandard name={buttonTwoName}/>
        <ButtonStandard name={buttonThreeName}/>
        <ActionButton name={buttonAction}/>
    </div>
    );
};

export default ButtonRowFour;