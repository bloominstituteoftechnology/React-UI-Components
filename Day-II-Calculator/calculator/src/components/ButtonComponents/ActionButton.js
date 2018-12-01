import React from 'react';
import './Button.css';
import ButtonCreator from './ButtonCreator';

const ActionButton = (props) => {
    return (
        <ButtonCreator actionStyle={props.actionStyle} operatorStyle={props.operatorStyle} text={props.text} />
    );
};

export default ActionButton;