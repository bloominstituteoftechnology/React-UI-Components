import React from 'react';
import './Button.sass';
import NumberPad from './NumberPad';
import OperatorButtonsContainer from './OperatorButtonsContainer';

const ButtonsContainer = () => {
    return (
        <div className="buttons-container">
            <NumberPad />
            <OperatorButtonsContainer />
        </div>
    );
};

export default ButtonsContainer;
