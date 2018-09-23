import React from 'react';
import './ButtonRow.css';
import ActionButton from './ActionButton.js'
import ButtonLarge from './ButtonLarge.js';

const ButtonRowTwo = (props) => {
    const buttonLargeName = props.name;
    const buttonAction = props.action;
    const extraClassName = props.extra
    return(<div className="btn-row">
        <ButtonLarge name={buttonLargeName} extra={extraClassName}/>
        <ActionButton name={buttonAction}/>
    </div>
    );
};

export default ButtonRowTwo;