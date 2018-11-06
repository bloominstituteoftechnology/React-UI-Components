import React from 'react';
import './OperatorContainer.css';
import OperatorButton from './OperatorButton';

function OperatorContainer(){
    return(
        <div className='operator-container'>
        <OperatorButton op='/'/>
        <OperatorButton op='*'/>
        <OperatorButton op='-'/>
        <OperatorButton op='+'/>
        <OperatorButton op='='/>
        </div>
    );
}

export default OperatorContainer;