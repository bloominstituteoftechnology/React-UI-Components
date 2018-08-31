import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import OperatorButton from './OperatorButton';

const ButtonContainer = () => {
    return(
        <div className="input-fields">
            <ActionButton />
            <OperatorButton />
        </div>
    )
};

export default ButtonContainer;