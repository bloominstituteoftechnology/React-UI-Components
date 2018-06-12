import React from 'react';
import './Display.css';
import NumPad from './NumPad.js';
import OperatorPad from './OperatorPad.js';

const ButtonDisplay = props => {
    return (
        <div className={props.customClass}>
            <NumPad buttons={props.buttons}/>
            <OperatorPad operators={props.operators} />
        </div>
    );

};
ButtonDisplay.defaultProps = {
    customClass: "buttonDisplay",
}

export default ButtonDisplay;