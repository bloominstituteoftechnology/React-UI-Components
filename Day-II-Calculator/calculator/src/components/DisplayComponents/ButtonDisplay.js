import React from 'react';
import './Display.css';
import NumPad from './NumPad.js';
import OperatorPad from './OperatorPad.js';

const ButtonDisplay = props => {
    return (
        <div className={props.customClass}>
            <NumPad />
            <OperatorPad />
        </div>
    );

};
ButtonDisplay.defaultProps = {
    customClass: "ButtonDisplay",
}

export default ButtonDisplay;