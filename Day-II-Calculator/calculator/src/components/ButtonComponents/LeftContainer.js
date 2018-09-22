import React from 'react';
import './Button.css';
import ClearKey from './ClearKey';
import ZeroKey from './ZeroKey';
import NumbersContainer from './NumbersContainer';

const LeftContainer = () => {
    return (
        <div className='LeftContainer'>
        <ClearKey /><NumbersContainer /><ZeroKey />
        </div>
    )


}






export default LeftContainer;