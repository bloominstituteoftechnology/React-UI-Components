import React from 'react';
import NumberButton from './NumberButton';
import ClearButton from './ClearButton';
import ActionButton from './ActionButton';

const ButtonContainer = () => {
    return (
        <div className='buttonContainer--main'>
            <div className='buttonContainer--numbers'>
                <div>
                <ClearButton />
                </div>
                <NumberButton />
            </div>
                <ActionButton />
        </div>
    )
}

export default ButtonContainer;