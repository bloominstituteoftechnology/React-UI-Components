import React from 'react';
import './Button.css';

// Components
import ClearButton from './ClearButton';

const ButtonContainer = (props) => {
    return (
        <div className='button-container'>
            <ClearButton text='AC' />
        </div>
    )
}

export default ButtonContainer;