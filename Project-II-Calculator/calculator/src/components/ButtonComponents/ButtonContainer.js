import React from 'react';
import './Button.css';

import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonContainer = () => (
    <div className="allBtns">
        <NumberButton />
        <ActionButton />
    </div>
);





export default ButtonContainer;
