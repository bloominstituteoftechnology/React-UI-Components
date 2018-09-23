import React from 'react';
import './ButtonRow.css';
import ActionButton from './ActionButton.js'
import ButtonLarge from './ButtonLarge.js';

const ButtonRowTwo = (props) => {
    const buttonLargeName = props.name;
    const buttonAction = props.action;
    return(<div className="btn-row">
        <ButtonLarge name={buttonLargeName} />
        <ActionButton name={buttonAction}/>
    </div>
    );
};

export default ButtonRowTwo;