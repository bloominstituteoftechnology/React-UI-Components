import React from 'react';
import './Button.css';
import NumberPad from './NumberPad';
import ActionButton from './ActionButton';
import OperatorButtonsContainer from './OperatorButtonsContainer';

const ButtonsContainer = () => {
    return (
        <>
            <ActionButton text="clear" />
            <NumberPad />
            <ActionButton text="0" />
            <OperatorButtonsContainer />
        </>
    );
};

export default ButtonsContainer;
