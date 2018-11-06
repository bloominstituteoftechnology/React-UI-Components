import React from 'react';
import './InputContainer.css';
import NumberContainer from './NumberContainer.js'
import ActionContainer from './OperatorContainer.js'

function InputContainer(){
    return(
        <div className='input-container'>
            <NumberContainer />
            <ActionContainer />
        </div>
    );
}

export default InputContainer;