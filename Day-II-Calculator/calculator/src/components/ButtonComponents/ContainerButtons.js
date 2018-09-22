import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ContainerButtons = () => {
    return (
        <div className='containerButtons'>
            <NumberButton />
            <ActionButton />
        </div>
    )
}

export default ContainerButtons;