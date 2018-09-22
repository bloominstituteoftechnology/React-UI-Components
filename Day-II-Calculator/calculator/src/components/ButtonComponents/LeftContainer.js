import React from 'react';
import './Button.css';
import ClearKeyContainer from './ClearKeyContainer';
import ZeroKeyContainer from './ZeroKeyContainer';
import NumbersContainer from './NumbersContainer';

const LeftContainer = () => {
    return (
        <div className='LeftContainer'>
        <ClearKeyContainer /><NumbersContainer /><ZeroKeyContainer />
        </div>
    )


}






export default LeftContainer;