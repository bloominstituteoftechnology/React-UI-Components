import React from 'react';
import './Button.css';
import ButtonCreator from "./ActionButton.js";

const NumberButton = props => {
    return (

        <div>
            <ButtonCreator extraStyles={props.extraStyles} text={props.text} number={props.text} />

        </div>

    );
};

export default NumberButton;


