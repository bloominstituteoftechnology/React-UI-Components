import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const MainButtons = props => {
    return (
        <div>
            <ActionButton />
            <NumberButton />
            <ActionButton />
        </div>
    );
};

export default MainButtons;